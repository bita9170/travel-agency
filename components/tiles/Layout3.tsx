import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Layout3Props {
  image: string;
  ctaText?: string;
  ctaLink?: string;
  rating?: string;
  category?: string;
}

const Layout3: React.FC<Layout3Props> = ({
  image,
  ctaText,
  ctaLink,
  rating,
  category,
}) => {
  return (
    <div className="tile-layout-3 ">
      <div className="grid overflow-hidden relative">
        <img
          src={image}
          alt="layout-2"
          className="w-full h-[270px] object-cover rounded-xl"
        />
        <div className="absolute top-2 right-2 z-10">
          <button className="bg-white p-1 rounded-full w-[30px]">
            <svg viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
            </svg>
          </button>
        </div>
        <div>
          {ctaText && ctaLink && (
            <Link href={ctaLink}>
              <p className="mt-2 text-base text-center">{ctaText}</p>
            </Link>
          )}


          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
