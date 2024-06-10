"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DialogPost } from "@/components/elements/dialogs/DialogPost";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { deletePost } from "@/controllers/postController";
import Spinner from "@/components/elements/Spinner";
import { formatDate } from "@/lib/utils";

export interface Post {
  _id: string;
  title: string;
  author: string;
  publicationDate: string;
  content?: string;
  image: string;
  locationId?: string;
  createdAt?: string;
  updatedAt?: string;
}

const DashboardPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/posts`);
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch posts", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePosts = () => {
    fetchPosts();
  };

  return (
    <div className="dashboard-section flex">
      <div className="menu flex-1">
        <div className="flex justify-between items-center ">
          <h3 className="font-bold px-8">All Posts</h3>

          <DialogPost callback={handlePosts}>
            <Button variant={"green"}>Add new Post</Button>
          </DialogPost>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="container">
            <Table>
              <TableHeader className="text-bold">
                <TableRow>
                  <TableHead>Post Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post: Post) => (
                  <TableRow key={post._id} className="border-b">
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>
                      {post.createdAt && formatDate(post.createdAt)}
                    </TableCell>
                    <TableCell>
                      {post.updatedAt && formatDate(post.updatedAt)}
                    </TableCell>
                    <TableCell className="flex items-end">
                      <div className="text-right flex-1 space-x-2">
                        <DialogPost postId={post._id} callback={handlePosts}>
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
                                This action cannot be undone. This will
                                permanently delete the post.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={async () => {
                                  await deletePost(post._id);
                                  handlePosts();
                                }}
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
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
