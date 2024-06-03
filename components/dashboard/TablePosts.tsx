// components/dashboard/TablePosts.tsx
"use client";
import { useState } from "react";

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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Post {
  [x: string]: string | number | boolean;
  _id: string;
  title: string;
  author: string;
  publicationDate: string;
}

interface TablePostsProps {
  posts: Post[];
}

const TablePosts: React.FC<TablePostsProps> = ({ posts }) => {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const handleDelete = (postId: string) => {
    // Call your delete method from controller here
    console.log("Delete post with ID:", postId);
    setOpenDialogId(null); // Close the dialog after action
  };

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
            <TableRow key={post._id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>
                {new Date(post.publicationDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2 w-10">
                  {/* TODO: You can hier using Dialog for Edit confirmation  */}
                  {/* TODO: With postId props = Edit Post --- without postId props = Add new Post */}
                  <DialogPost postId={post._id}>
                    <Button variant={"secondary"}>Edit</Button>
                  </DialogPost>
                  <Button
                    variant="destructive"
                    onClick={() => setOpenDialogId(post._id)}
                  >
                    Delete
                  </Button>
                  {openDialogId === post._id && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button hidden>Open</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the post.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel
                            onClick={() => setOpenDialogId(null)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(post._id)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}

                  <Button variant={"orange"} asChild>
                    <Link href={`/blog/${post._id} `} target="_blank">
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
