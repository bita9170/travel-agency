"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Post {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  content?: string;
}

interface ViewPostProps {
  post: Post;
  onClose: () => void;
  isOpen: boolean;
}

const ViewPost: React.FC<ViewPostProps> = ({ post, onClose, isOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <button>View Post</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="p-5">
          <p>
            <strong>Author:</strong> {post.author}
          </p>
          <p>
            <strong>Date Published:</strong>{" "}
            {new Date(post.publicationDate).toLocaleDateString()}
          </p>
          {post.content && <p className="mt-4">{post.content}</p>}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ViewPost;
