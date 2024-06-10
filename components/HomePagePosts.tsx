"use client";
import React from "react";
import { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import { Post } from "@/app/dashboard/posts/page";
import { getLastPosts } from "@/controllers/postController";
import Layout1 from "./tiles/Layout1";
import MaxLimitWrapper from "./elements/MaxLimitWrapper";
import Layout3 from "./tiles/Layout3";

function HomePagePosts({ type }: any) {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getLastPosts(4));
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts && type === "hero" && (
        <Hero
          title={posts[0].title}
          image={posts[0].image}
          subtitle={posts[0].subtitle}
          ctaText="Explore now"
          ctaLink={"/blog/" + posts[0]._id}
          className="mt-4"
        />
      )}

      {posts && type === "3-col-post" && (
        <section className="bg-[#faf1ed] py-10 mt-4 px-2 md:px-0">
          <MaxLimitWrapper>
            <h3>More to explore</h3>
            <div className="grid md:grid-cols-3 gap-8 my-4">
              <Layout3
                image={posts[1].image}
                ctaText={posts[1].title}
                subtitle={posts[1].subtitle}
                ctaLink={"/blog/" + posts[1]._id}
              />
              <Layout3
                image={posts[2].image}
                ctaText={posts[2].title}
                subtitle={posts[2].subtitle}
                ctaLink={"/blog/" + posts[2]._id}
              />
              <Layout3
                image={posts[3].image}
                ctaText={posts[3].title}
                subtitle={posts[3].subtitle}
                ctaLink={"/blog/" + posts[2]._id}
              />
            </div>
          </MaxLimitWrapper>
        </section>
      )}
    </>
  );
}

export default HomePagePosts;
