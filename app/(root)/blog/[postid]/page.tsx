import { Post } from "@/app/dashboard/posts/page";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Options from "@/components/header/Options";
import Hero from "@/components/hero/Hero";
import { getPostById } from "@/controllers/postController";

const BlogPage = async ({ params }: any) => {
  const { postid } = params;
  const post: Post = await getPostById(postid);

  return (
    <>
      <Options />
      <MaxLimitWrapper>
        {post && (
          <div className="blog py-20">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2> {/* Ensure subtitle is rendered */}
            <h3>{post.author}</h3>
            {post.image && (
              <Hero image={post.image} className="mt-4 md:rounded-none" />
            )}
            <p className="my-4 mb-10">{post.publicationDate}</p>
            <p className="text-[16px]">{post.content}</p>
          </div>
        )}
      </MaxLimitWrapper>
    </>
  );
};

export default BlogPage;
