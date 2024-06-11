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
import { createPost, updatePost } from "@/controllers/postController";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function DialogPost({
  children,
  postId = null,
  callback,
  className,
}: {
  children: React.ReactNode;
  postId?: string | null;
  callback: () => void;
  className?: string;
}) {
  const isFormValid = () => title.trim() && author.trim() && content.trim();

  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [locationId, setLocationId] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: string;
    message: string;
  }>({
    show: false,
    type: "default",
    message: "",
  });

  const [open, setOpen] = useState(false);

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
          setSubtitle(post.subtitle);
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
      setAlert({
        show: true,
        type: "destructive",
        message: "Please fill in all fields.",
      });
      return;
    }
    setLoading(true);

    try {
      if (postId) {
        // Update existing post
        const updatedData = {
          title,
          subtitle,
          author,
          content,
          image,
          locationId,
        };

        const res = await updatePost(postId, updatedData);
        if (res.success) {
          setAlert({
            show: true,
            type: "success",
            message: "Post updated successfully!",
          });

          setTimeout(() => {
            setOpen(false);
            callback();
          }, 1000);
        } else {
          setAlert({
            show: true,
            type: "destructive",
            message: `Error: ${res.message}`,
          });
        }
      } else {
        const res = await createPost(
          title,
          subtitle,
          content,
          author,
          image,
          locationId,
          user ? user.id : ""
        );

        if (res.success) {
          setAlert({
            show: true,
            type: "success",
            message: "Post added successfully!",
          });

          setTimeout(() => {
            setOpen(false);
            callback();
          }, 1000);
        } else {
          setAlert({
            show: true,
            type: "destructive",
            message: "Failed to save post. Please try again.",
          });
        }
      }
    } catch (error) {
      setAlert({
        show: true,
        type: "destructive",
        message: "Failed to save post. Please try again.",
      });
      console.error("Failed to save post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogShadcn open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{postId ? "Edit Post" : "Add a New Post"}</DialogTitle>
        </DialogHeader>

        <Alert
          variant={
            alert.type == "success"
              ? alert.type
              : alert.type == "destructive"
              ? alert.type
              : "default"
          }
          className={`${!alert.show && "hidden"}`}
        >
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>{alert.message}</AlertTitle>
        </Alert>

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
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Subtitle"
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
