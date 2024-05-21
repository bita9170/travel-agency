import React from "react";
import Layout2 from "@/components/tiles/Layout2";
import { Button } from "@/components/ui/button";

const AttractionSection = ({ title }: { title: string }) => (
  <div>
    <h3>Explore top attractions in {title} </h3>
    <div className="grid md:grid-cols-4 gap-8 my-4">
      <Layout2
        image="/blog5.jpg"
        ctaText="7 New York City restaurants to try when the top tables are booked"
        rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
        ctaLink="#"
      />
      <Layout2
        image="/blog6.jpg"
        ctaText="10 best places to visit in May around the world"
        rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
        ctaLink="#"
      />
      <Layout2
        image="/blog3.jpg"
        ctaText="One perfect day in Milan"
        rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
        ctaLink="#"
      />
      <Layout2
        image="/blog4.jpg"
        ctaText="10 best places to visit in May around the world"
        rating="https://www.tripadvisor.de/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
        ctaLink="#"
      />
    </div>
    <div className="text-center py-4">
      <Button className="bg-black text-white px-6 py-7 rounded-xm">
        Start planning a trip to {title}
      </Button>
    </div>
  </div>
);

export default AttractionSection;
