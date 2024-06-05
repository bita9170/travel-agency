import React from "react";
import Layout1 from "@/components/tiles/Layout1";
import Hero from "@/components/hero/Hero";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Layout4 from "@/components/tiles/Layout4";
import { getAllLocationDetails } from "@/lib/data/location";
import { LocationDetails } from "@/lib/class/location";
import Options from "@/components/header/Options";

const HotelsPage = () => {
  const locations: LocationDetails[] = getAllLocationDetails();
  const images = [
    {
      image: "/Hotel-indoorpool.jpg",
      ctaText: "Astra Opéra - Astotel",
      ctaLink: "#",
    },
    {
      image: "/Hotel2.jpg",
      ctaText: "Malte Astotel",
      ctaLink: "#",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/90/05/26/club-room--v6081295.jpg?w=300&h=300&s=1",
      ctaText: "Hotel Therese",
      ctaLink: "#",
    },
    {
      image: "/Hotel4jpg",
      ctaText: "Hotel Francois 1er",
      ctaLink: "#",
    },
  ];

  return (
    <>
      <Options showTitle={false} />
      <Hero
        image="/hotel-colline-de-france.jpg"
        className="mt-4 md:rounded-none"
      />
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

      <MaxLimitWrapper>
        <div className="grid-cols-1 sm:grid md:grid-cols-2 gap-4">
          {locations.map((location) => (
            <Layout4
              key={location.getLocationId()}
              image={location.getPhotos()[0].getLarge().url}
              ctaText={location.getName()}
              ctaLink={location.getWebsite()}
              rating={location.getRatingImageUrl()}
              about={location.getDescription()}
            />
          ))}
        </div>
      </MaxLimitWrapper>
    </>
  );
};

export default HotelsPage;
