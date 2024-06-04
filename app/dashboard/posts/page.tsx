"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import TablePosts from "@/components/dashboard/TablePosts";
import { DialogPost } from "@/components/elements/dialogs/DialogPost";
import { Button } from "@/components/ui/button";

export interface Post {
  _id: string;
  title: string;
  author: string;
  publicationDate: string;
  content?: string;
  image?: string;
  locationId?: string;
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

  return (
    <div className="dashboard-section flex py-10">
      <div className="menu flex-1">
        <div className="flex justify-between gap-96 items-center mb-4">
          <h3 className="font-bold p-8">All Posts</h3>

          {/* TODO: With postId props = Edit Post --- without postId props = Add new Post */}
          <DialogPost>
            <Button variant={"green"}>Add new Post</Button>
          </DialogPost>
        </div>

        {loading ? <p>Loading posts...</p> : <TablePosts posts={posts} />}
      </div>
    </div>
  );
};

export default DashboardPage;
