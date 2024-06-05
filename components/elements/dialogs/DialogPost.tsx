"use client";
import {
  Dialog as DialogShadcn,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { updatePost } from "@/controllers/postController";

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

  useEffect(() => {
    if (postId) {
      // Fetch post data and populate fields for editing
      const fetchPost = async () => {
        try {
          const res = await axios.get(`/api/posts`, {
            params: { postId },
          });
          const post = res.data.posts;
          setTitle(post.title);
          setAuthor(post.author);
          setContent(post.content);
          setImage(post.image);
          setLocationId(post.locationId);
        } catch (error) {
          console.error("Failed to fetch post", error);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!isFormValid()) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);

    try {
      if (postId) {
        // Update existing post
        const updatedData = { title, author, content, image, locationId };
        console.log("updatedData", updatedData);
        console.log("postId", postId);

        const result = await updatePost(postId, updatedData);
        if (result.success) {
          alert("Post updated successfully!");
        } else {
          alert(`Error: ${result.message}`);
        }
      } else {
        // Create new post
        await axios.post("/api/posts", {
          title,
          author,
          content,
          image,
          locationId,
        });
        alert("Post added successfully!");
      }
    } catch (error) {
      alert("Failed to save post. Please try again.");
      console.error("Failed to save post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogShadcn>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{postId ? "Edit Post" : "Add a New Post"}</DialogTitle>
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
            {loading
              ? postId
                ? "Updating..."
                : "Adding..."
              : postId
              ? "Update Post"
              : "Add Post"}
          </Button>
        </form>
      </DialogContent>
    </DialogShadcn>
  );
}
