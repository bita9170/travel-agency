"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import TablePosts from "@/components/dashboard/TablePosts";
import ViewPost from "@/components/dashboard/ViewPosts";
import AddPostForm from "@/components/dashboard/AddNewPosts";

interface Post {
  id: string;
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
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = async (page: number) => {
    try {
      const response = await axios.get(`/api/posts?page=${page}`);
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch posts", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleEdit = (id: string) => {
    console.log(`Edit post ${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      console.log(`Deleted post ${id}`);
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  const handleView = (id: string) => {
    const post = posts.find((p) => p.id === id);
    if (post) {
      setSelectedPost(post);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handlePostAdded = () => {
    setShowForm(false);
    fetchPosts(page);
  };

  return (
    <div className="dashboard-section flex py-10">
      <div className="menu flex-1">
        <div className="flex justify-between gap-96 items-center mb-4">
          <h3 className="font-bold p-8">All Posts</h3>
          <button
            style={{
              backgroundColor: "#34e0a1",
              width: "150px",
            }}
            className="bg-primary p-4 py-1 rounded text-white"
            onClick={() => setShowForm(true)}
          >
            Add new Post
          </button>
        </div>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <TablePosts
            posts={posts}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        )}

        {selectedPost && (
          <ViewPost post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}

        {showForm && <AddPostForm onPostAdded={handlePostAdded} />}
      </div>
    </div>
  );
};

export default DashboardPage;
