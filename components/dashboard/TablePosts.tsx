"use client";
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
import { deletePost, updatePost } from "@/controllers/postController";
import { useEffect, useState } from "react";
import { Post } from "@/app/dashboard/posts/page";

const TablePosts = (props: any) => {
  const { posts } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {}, [posts]);

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
          {posts.map((post: Post) => (
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

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={"destructive"}>Delete</Button>
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
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={async () => await deletePost(post._id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

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
