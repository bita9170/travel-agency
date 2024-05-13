import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Layout1 from "@/components/tiles/Layout1";
import Hero from "@/components/hero/Hero";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";

const HotelsPage = () => {
  const images = [
    {
      image: "/image1.jpeg",
      ctaText: "Travelers' Choice",
      ctaLink: "#",
    },
    {
      image: "/image2.jpeg",
      ctaText: "Kid-friendly",
      ctaLink: "#",
    },
    {
      image: "/image3.jpeg",
      ctaText: "5-star stay",
      ctaLink: "#",
    },
    {
      image: "/image4.jpeg",
      ctaText: "Breakfast included",
      ctaLink: "#",
    },
  ];

  return (
    <>
      <Hero image="/caption.jpg" className="mt-4 md:rounded-none" />

      <MaxLimitWrapper>
        <section className="py-10 mt-4 px-2 md:px-0">
          <h3>Popular hotels in Paris right now</h3>
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
    </>
  );
};

export default HotelsPage;
