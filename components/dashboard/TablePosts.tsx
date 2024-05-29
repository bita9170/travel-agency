// components/dashboard/TablePosts.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Post {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
}

interface TablePostsProps {
  posts: Post[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const TablePosts: React.FC<TablePostsProps> = ({
  posts,
  onEdit,
  onDelete,
  onView,
  onNextPage,
  onPreviousPage,
}) => {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/dashboard/posts/${id}`);
  };

  return (
    <div className="container">
      <Table>
        <TableHeader className="text-bold">
          <TableRow>
            <TableHead>Post Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Date Published</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((posts) => (
            <TableRow key={posts.id}>
              <TableCell>{posts.title}</TableCell>
              <TableCell>{posts.author}</TableCell>
              <TableCell>
                {new Date(posts.publicationDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2 w-10">
                  <button
                    style={{ backgroundColor: "#34e0a1" }}
                    onClick={() => handleEdit(posts.id)}
                    className="text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "#34e0a1" }}
                    onClick={() => onDelete(posts.id)}
                    className="text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    style={{ backgroundColor: "#34e0a1" }}
                    onClick={() => onView(posts.id)}
                    className="text-white px-2 py-1 rounded"
                  >
                    View
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-evenly items-center py-4">
        <button
          style={{
            width: "150px",
            backgroundColor: "#34e0a1",
            cursor: "pointer",
          }}
          onClick={onPreviousPage}
          className="px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          style={{
            width: "100px",
            backgroundColor: "#34e0a1",
            cursor: "pointer",
          }}
          onClick={onNextPage}
          className="text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePosts;
