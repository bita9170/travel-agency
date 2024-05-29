"use client";
import {
  Dialog as DialogShadcn,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// TODO: With postId props = Edit Post --- without postId props = Add new Post

export function DialogPost({
  children,
  postId = null,
  className,
}: {
  children: React.ReactNode;
  postId?: string | null;
  className?: string;
}) {
  const isFormValid = () => title.trim() && author.trim() && content.trim();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [locationId, setLocationId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!isFormValid()) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);

    try {
      await axios.post("/api/posts", {
        title,
        author,
        content,
        image,
        locationId,
      });
    } catch (error) {
      alert("Failed to add post. Please try again.");
      console.error("Failed to add post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogShadcn>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add a New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="shadow-shadowSmall border-2 rounded-xl"
          />
          <Input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="shadow-shadowSmall border-2 rounded-xl"
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="shadow-shadowSmall border-2 rounded-xl"
          />
          <Input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="shadow-shadowSmall border-2 rounded-xl"
          />
          <Input
            type="text"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            placeholder="Location ID"
            className="shadow-shadowSmall border-2 rounded-xl"
          />
          <Button type="submit" disabled={loading} variant={"green"}>
            {loading ? "Adding..." : "Add Post"}
          </Button>
        </form>
      </DialogContent>
    </DialogShadcn>
  );
}
