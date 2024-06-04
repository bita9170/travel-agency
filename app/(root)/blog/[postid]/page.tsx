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

  // const locations = [
  //   {
  //     title: "Tartu, Estonia",
  //     subtitle: "For culture hounds",
  //     temp: "Average temp: 69ºF high, 49ºF low",
  //     image: "/blog1.jpg",
  //     description:
  //       "Tartu is Estonia's second city, and it's a place that takes its culture seriously. The city is home to the University of Tartu, one of the oldest in northern Europe, and the Estonian National Museum, which is housed in a striking modern building on the edge of town. The museums permanent exhibition, “Encounters,” tells the story of the Estonian people, from ancient times to the present day. The city also has a vibrant arts scene, with galleries, theaters, and festivals throughout the year.",
  //     heroImage: null,
  //   },
  //   {
  //     title: "New York City",
  //     subtitle: "For foodies",
  //     temp: "Average temp: 69ºF high, 49ºF low",
  //     image: "/blog5.jpg",
  //     description:
  //       "New York City is a food lover's paradise, with thousands of restaurants serving every kind of cuisine imaginable. The city's dining scene is constantly evolving, with new restaurants opening all the time. Some of the city's most famous restaurants are booked months in advance, but there are plenty of other great places to eat that don't require a reservation. From food trucks to fine dining, New York City has something for every taste and budget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam sunt voluptatum non, eaque voluptatem tenetur exercitationem nisi in eos quae saepe iste vitae fugiat dolorem illo architecto, corporis inventore!",
  //     heroImage:
  //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ef/19/1a/caption.jpg?w=800&h=-1&s=1",
  //   },
  //   {
  //     title: "Dublin",
  //     subtitle: "For history buffs",
  //     temp: "Average temp: 69ºF high, 49ºF low",
  //     image: "/blog9.jpg",
  //     description:
  //       "Dublin is a city with a rich history, and it's easy to see that history everywhere you go. The city is home to some of Ireland's most famous landmarks, including Dublin Castle, Trinity College, and the General Post Office, where the Easter Rising of 1916 took place. The city also has a number of excellent museums, including the National Museum of Ireland and the Little Museum of Dublin. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam sunt voluptatum non, eaque voluptatem tenetur exercitationem nisi in eos quae saepe iste vitae fugiat dolorem illo architecto, corporis inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //     heroImage: "/blog-hero2.jpg",
  //   },
  //   {
  //     title: "Yellowstone National Park",
  //     subtitle: "For adventure seekers",
  //     temp: "Average temp: 55ºF high, 45ºF low",
  //     image: "/blog7.jpg",
  //     description:
  //       "Reykjavík, the capital of Iceland, is a gateway to incredible natural wonders such as geysers, waterfalls, and glaciers. Take a dip in the Blue Lagoon, explore the Golden Circle, and experience the midnight sun in this unique and breathtaking destination. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam sunt voluptatum non, eaque voluptatem tenetur exercitationem nisi in eos quae saepe iste vitae fugiat dolorem illo architecto, corporis inventore!",
  //     heroImage:
  //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ef/19/9d/caption.jpg?w=800&h=-1&s=1",
  //   },
  //   {
  //     title: "Québec City",
  //     subtitle: "For wildlife enthusiasts",
  //     temp: "Average temp: 70ºF high, 52ºF low",
  //     image: "/blog8.jpg",
  //     description:
  //       "Volcanoes National Park in Rwanda is home to the endangered mountain gorillas. Embark on a once-in-a-lifetime trek to see these magnificent creatures in their natural habitat. The park also offers stunning landscapes, volcanic peaks, and diverse wildlife. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //     heroImage: null,
  //   },
  //   {
  //     title: "Reykjavík, Iceland",
  //     subtitle: "For music lovers",
  //     temp: "Average temp: 85ºF high, 65ºF low",
  //     image: "/blog10.jpg",
  //     description:
  //       "Kansas City is known for its rich musical heritage, particularly jazz. Visit the American Jazz Museum, enjoy live music in the 18th & Vine Historic Jazz District, and indulge in the city's famous barbecue. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //     heroImage:
  //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ef/1a/1b/caption.jpg?w=800&h=-1&s=1",
  //   },

  //   {
  //     title: "Volcanoes National Park, Rwanda",
  //     subtitle: "For history enthusiasts",
  //     temp: "Average temp: 80ºF high, 60ºF low",
  //     image: "/blog11.jpg",
  //     description:
  //       "Boston is a city steeped in American history. Walk the Freedom Trail, visit the historic sites of the American Revolution, and explore the renowned museums and universities. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //     heroImage: null,
  //   },
  //   {
  //     title: "Kansas City, MO",
  //     subtitle: "For soccer fans",
  //     temp: "Average temp: 85ºF high, 66ºF low",
  //     image: "/blog2.jpg",
  //     description:
  //       "Kansas City is known for its rich musical heritage, particularly jazz. Visit the American Jazz Museum, enjoy live music in the 18th & Vine Historic Jazz District, and indulge in the city's famous barbecue. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //       heroImage:
  //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ef/1a/db/caption.jpg?w=800&h=-1&s=1",
  //   },

  //   {
  //     title: "Boston",
  //     subtitle: "For history enthusiasts",
  //     temp: "Average temp: 80ºF high, 60ºF low",
  //     image: "/blog11.jpg",
  //     description:
  //       "Boston is a city steeped in American history. Walk the Freedom Trail, visit the historic sites of the American Revolution, and explore the renowned museums and universities. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //     heroImage: null,
  //   },

  //   {
  //     title: "McMinnville, OR",
  //     subtitle: "For wine lovers",
  //     temp: "Average temp: 75ºF high, 55ºF low",
  //     image: "/blog12.jpg",
  //     description:
  //       "McMinnville in Oregon's Willamette Valley is a haven for wine enthusiasts. Explore the local wineries, taste world-class Pinot Noir, and enjoy the charming small-town atmosphere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat dolore autem natus. Nesciunt, eos excepturi! Minima libero esse molestiae dolor nam fugiat aliquam alias quas, officiis veniam aliquid corrupti?",
  //     heroImage:
  //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ef/1b/43/caption.jpg?w=800&h=-1&s=1",
  //   },
  // ];

  return (
    <MaxLimitWrapper>
      {post && (
        <div className="blog py-20">
          <h1>{post.title}</h1>
          <h3 className="text-center">
            From mountain gorilla treks to Baltic city getaways, early summer
            travel rewards the adventurous.
          </h3>
          <Hero
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ef/18/9e/caption.jpg?w=900&h=-1&s=1&cx=1920&cy=1080&chk=v1_403a8774d94d4732eae6"
            className="mt-4 md:rounded-none"
          />
          <p className="my-4 mb-10">
            A mountain gorilla in Volcanoes National Park, Rwanda Image:
            guenterguni/Getty Images
          </p>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
            minima ab! Minima praesentium inventore at exercitationem aliquam,
            incidunt error dolores cum delectus. Facilis magnam corporis rem
            deserunt quis optio architecto. Maiores minus enim sunt
            reprehenderit culpa repudiandae vitae voluptatibus id, explicabo qui
            debitis dolor veniam earum unde corrupti temporibus est inventore
            consequatur aperiam, velit ipsam eveniet, consequuntur ipsa?
            Voluptates, quam. Molestiae eos voluptas vero perspiciatis neque!
            Maxime nihil eum voluptatum aspernatur odio veritatis rerum
            accusamus ipsa, facilis obcaecati. Alias animi consectetur numquam,
            iste nobis quas veritatis quam! Eos, aliquid perspiciatis! Fuga quae
            eius ducimus enim voluptatum tenetur accusamus numquam neque.
            Soluta, magnam magni voluptates unde quae quia id porro corrupti
            necessitatibus cupiditate nulla blanditiis deleniti totam facere.
            Inventore, assumenda ipsum? Excepturi sed doloremque ab, illum
            asperiores minima nihil hic sit consequuntur perferendis et enim,
            suscipit, accusantium exercitationem maxime nemo illo incidunt neque
            ratione architecto tempore ducimus non quibusdam consequatur!
            Repudiandae. lorem*2
          </p>
          {/* <div className="location-grid">
            <div className="location-container">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="location-item"

                  //scroll to the location section
                  // onClick={() => {
                  //   const element = document.getElementById(location.title);
                  //   if (element) {
                  //     element.scrollIntoView({
                  //       behavior: "smooth",
                  //       block: "start",
                  //     });
                  //   }
                  // }}
                >
                  {location.title}
                </span>
              ))}
            </div>
            <Separator className="mt-4" />
          </div> */}
          {/* {locations.map((location, index) => (
            <div key={index}>
              <LocationSection {...location} />
              <AttractionSection title={location.title} />
            </div>
          ))} */}
        </div>
      )}
    </MaxLimitWrapper>
  );
};

export default BlogPage;
