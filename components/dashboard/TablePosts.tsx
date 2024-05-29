// components/dashboard/TablePosts.tsx
"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { DialogPost } from "../elements/dialogs/DialogPost";

interface Post {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
}

interface TablePostsProps {
  posts: Post[];
}

const TablePosts: React.FC<TablePostsProps> = ({ posts }) => {
  return (
    <div className="container">
      {/* TODO: You can use  Data-Table component instead of  Table component */}
      {/* https://ui.shadcn.com/docs/components/data-table */}
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
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>
                {new Date(post.publicationDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2 w-10">
                  {/* TODO: You can hier using Dialog for Edit confirmation  */}
                  {/* TODO: With postId props = Edit Post --- without postId props = Add new Post */}
                  <DialogPost postId={post.id}>
                    <Button variant={"secondary"}>Edit</Button>
                  </DialogPost>
                  <Button variant={"destructive"}>
                    {/* TODO: You can hier using Dialog for delete confirmation  */}
                    Delete
                  </Button>
                  <Button variant={"orange"} asChild>
                    <Link href={`/blog/${post.id}`} target="_blank">
                      View
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePosts;
