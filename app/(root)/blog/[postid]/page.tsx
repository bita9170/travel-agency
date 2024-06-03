// app/(root)/blog/[postid]/page.tsx

import React from "react";
import Hero from "@/components/hero/Hero";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import { Separator } from "@/components/ui/separator";
import LocationSection from "@/components/blog/LocationSection";
import AttractionSection from "@/components/blog/AttractionSection";
import { get } from "http";
import { getPostById, getPosts } from "@/controllers/postController";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BlogPage = async ({ params }: any) => {
  const { postid } = params;
  const res = await getPostById(postid);
  const post = await res.json();
  const author = await post.author;
  const image = await post.image;
  const content = await post.content;

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
  //     heroImage:
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
      <Table>
        <TableHead>
          <TableRow className="block">
            {/* <TableHead>{postid}</TableHead> */}

            <TableHead>{post.title}</TableHead>

            <TableHead>{post.author}</TableHead>

            <TableHead>{post.content}</TableHead>

            <TableHead>
              <Image
                src={post.image}
                alt="Beschreibung des Bildes"
                width={500}
                height={300}
              />
            </TableHead>
          </TableRow>
        </TableHead>
      </Table>
    </MaxLimitWrapper>
  );
};

export default BlogPage;
