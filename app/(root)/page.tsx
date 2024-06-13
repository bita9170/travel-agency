import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Options from "@/components/header/Options";
import Layout from "@/components/hero/Layout";
import { SummerContent, SpringContent } from "@/components/tab/content";
import Tab, { TabProps } from "@/components/tabsection/Tab";
import Layout1 from "@/components/tiles/Layout1";
import Layout2 from "@/components/tiles/Layout2";
import { getLastPosts } from "@/controllers/postController";
import { LocationDetails } from "@/lib/class/location";
import { getLocationDetailsByIds } from "@/lib/data/location";
import { Post } from "../dashboard/posts/page";
import Hero from "@/components/hero/Hero";
import Layout3 from "@/components/tiles/Layout3";

export default async function Home() {
  const posts: Post[] = await getLastPosts(5);

  const images = [
    {
      image: "/image1.jpeg",
      ctaText: "Top Hotels",
      ctaLink: "#",
    },
    {
      image: "/image2.jpeg",
      ctaText: "All-Inclusive Hotels",
      ctaLink: "#",
    },
    {
      image: "/image3.jpeg",
      ctaText: "Family-Friendly Hotels",
      ctaLink: "#",
    },
    {
      image: "/image4.jpeg",
      ctaText: "Luxury Hotels",
      ctaLink: "#",
    },
  ];

  const data: TabProps[] = [
    {
      title: "Spring Destinations",
      content: <SpringContent />,
    },
    {
      title: "Summer Destinations",
      content: <SummerContent />,
    },
  ];

  return (
    <>
      <MaxLimitWrapper className="mx-2 md:mx-auto">
        <Options />
      </MaxLimitWrapper>

      <MaxLimitWrapper>
        {posts[0] && (
          <Hero
            title={posts[0].title}
            image={posts[0].image}
            subtitle={posts[0].subtitle}
            ctaText="Explore now"
            ctaLink={"/blog/" + posts[0]._id}
            className="mt-4"
          />
        )}
      </MaxLimitWrapper>

      <MaxLimitWrapper>
        <section className="py-10 mt-4 px-2 md:px-0">
          <h3>Stay somewhere award winning</h3>
          <p>2024 Travelers Choice Awards Best of the Best Hotels</p>
          <div className="grid md:grid-cols-4 gap-8 my-4">
            {images.map((item, index) => (
              <Layout1
                key={index}
                image={item.image}
                ctaText={item.ctaText}
                ctaLink={item.ctaLink}
              />
            ))}
          </div>
        </section>
      </MaxLimitWrapper>

      <MaxLimitWrapper>
        <section className="py-10 mt-4 px-2 md:px-0">
          <h3>You might like these</h3>
          <p>More things to do in Paris</p>

          <div className="grid md:grid-cols-4 gap-8 my-4">
            {getLocationDetailsByIds([188151, 188757, 188679, 188709]).map(
              async (location: LocationDetails) => (
                <Layout2
                  key={location.getLocationId()}
                  image={(await location.getPhotos())[0].getLarge().url}
                  ctaText={location.getName()}
                  rating={location.getRatingImageUrl()}
                  ctaLink="#"
                />
              )
            )}
          </div>
        </section>
      </MaxLimitWrapper>

      <section className="bg-[#faf1ed] py-10 mt-4 px-2 md:px-0">
        <MaxLimitWrapper>
          <h3>More to explore</h3>
          <div className="grid md:grid-cols-2 gap-8 my-4">
            {posts[1] && (
              <Layout3
                image={posts[1].image}
                ctaText={posts[1].title}
                ctaLink={"/blog/" + posts[1]._id}
              />
            )}

            {posts[2] && (
              <Layout3
                image={posts[2].image}
                ctaText={posts[2].title}
                ctaLink={"/blog/" + posts[2]._id}
              />
            )}

            {posts[3] && (
              <Layout3
                image={posts[3].image}
                ctaText={posts[3].title}
                ctaLink={"/blog/" + posts[3]._id}
              />
            )}

            {posts[4] && (
              <Layout3
                image={posts[4].image}
                ctaText={posts[4].title}
                ctaLink={"/blog/" + posts[4]._id}
              />
            )}
          </div>
        </MaxLimitWrapper>
      </section>

      <MaxLimitWrapper>
        <section className="py-10 mt-4 px-2 md:px-0">
          <h3>Dream Your Next Trip</h3>
          <p>2024 Travelers Choice Awards Best of the Best Hotels</p>
          <div className="grid md:grid-cols-4 gap-8 my-4">
            {images.map((item, index) => (
              <Layout1
                key={index}
                image={item.image}
                ctaText={item.ctaText}
                ctaLink={item.ctaLink}
              />
            ))}
          </div>
        </section>
      </MaxLimitWrapper>

      <div className="bg-[#fff7e1]">
        <MaxLimitWrapper className="px-2">
          <Layout />
        </MaxLimitWrapper>
      </div>
      <MaxLimitWrapper className="pt-8 mx-2 md:mx-auto">
        <Tab data={data} tabsHeading="Trending in Travel" />
      </MaxLimitWrapper>
    </>
  );
}
