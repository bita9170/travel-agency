import React from "react";
import Hero from "@/components/hero/Hero";

interface LocationProps {
  title: string;
  subtitle: string;
  temp: string;
  description: string;
  heroImage?: string | null;
}

const LocationSection: React.FC<LocationProps> = ({
  title,
  subtitle,
  temp,
  description,
  heroImage,
}) => (
  <div>
    <h3 className="titel">{title}</h3>
    <h5 className="subtitel">{subtitle}</h5>
    <p className="temp">{temp}</p>
    {heroImage && <Hero image={heroImage} className="mt-4 md:rounded-none" />}
    <p className="my-4 mb-10">{description}</p>
  </div>
);

export default LocationSection;
