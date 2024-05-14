import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Layout1 from "@/components/tiles/Layout1";
import Hero from "@/components/hero/Hero";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Layout4 from "@/components/tiles/Layout4";

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

      <MaxLimitWrapper>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-4">
          <Layout4
            image="/Hotel1.jpg"
            ctaText="Hôtel du Plat d'Etain"
            ctaLink="https://www.hotelplatdetain.com/en/?utm_source=tripadvisor&utm_medium=link&utm_campaign=website"
            rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
            about="Welcome to Hôtel du Plat d'Etain, your Paris “home away from home.” Hôtel du Plat d'Etain aims to make your visit as relaxing and enjoyable as possible, which is why so many guests continue to come back year after year."
          />

          <Layout4
            image="/Hotel2.jpg"
            ctaText="1. Hotel Malte - Astotel"
            ctaLink="https://www.secure-hotel-booking.com"
            rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
            about="Welcome to Hôtel du Plat d'Etain, your Paris “home away from home.” Hôtel du Plat d'Etain aims to make your visit as relaxing and enjoyable as possible, which is why so many guests continue to come back year after year."
          />
          <Layout4
            image="/Hotel-indoorpool.jpg"
            ctaText="2. Hôtel Astra Opéra - Astotel"
            ctaLink="https://www.secure-hotel-booking.com/smart/Gp-Astotel/21E2-6664/en-US/?utm_source=TripAdvisor_usa&utm_medium=espace_contact&utm_campaign=TripAdvisor_astra"
            rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
            about="The Hotel Astra is located in the 9th arrondissement, just a stone's throw from the Opéra Garnier, the Grands Boulevards, Place Vendôme and Rue de la Paix. Ideally situated close to the capital's business centers, our 4-star establishment invites you to enjoy yourself, thanks to its location in the heart of the theater district and the Grands Magasins, the must-see sites of the City of Light. "
          />
        </div>
      </MaxLimitWrapper>
    </>
  );
};

export default HotelsPage;
