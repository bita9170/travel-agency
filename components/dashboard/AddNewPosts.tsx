"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddPostForm = ({ onPostAdded }: { onPostAdded: () => void }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [locationId, setLocationId] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormValid = () => title.trim() && author.trim() && content.trim();

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
      setTitle("");
      setAuthor("");
      setContent("");
      setImage("");
      setLocationId("");
      onPostAdded();
    } catch (error) {
      alert("Failed to add post. Please try again.");
      console.error("Failed to add post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Add Post</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          ></textarea>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
          <input
            type="text"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            placeholder="Location ID"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Post"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostForm;
