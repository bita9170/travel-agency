"use client";

import { Post } from "@/app/dashboard/posts/page";
import AttractionSection from "@/components/blog/AttractionSection";
import LocationSection from "@/components/blog/LocationSection";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Hero from "@/components/hero/Hero";
import { Separator } from "@/components/ui/separator";
import { getPostById } from "@/controllers/postController";
import { useEffect, useState } from "react";

const BlogPage = ({ params }: any) => {
  const { postid } = params;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPosts = async () => {
      setPost(await getPostById(postid));
    };

    fetchPosts();
  }, []);

  return (
    <MaxLimitWrapper>
      {post && (
        <div className="blog py-20">
          <h1>{post.title}</h1>
          <h3>{post.author}</h3>

          <Hero image={post.image} className="mt-4 md:rounded-none" />
          <p className="my-4 mb-10">{post.publicationDate}</p>
          <p className="text-[16px]">{post.content}</p>
        </div>
      )}
    </MaxLimitWrapper>
  );
};

export default BlogPage;
