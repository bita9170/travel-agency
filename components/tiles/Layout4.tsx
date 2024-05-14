import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface Layout4Props {
  image: string;
  ctaText?: string;
  ctaLink?: string;
  rating?: string;
  about?: string;
}

function Layout4({ image, ctaText, ctaLink, rating, about }: Layout4Props) {
  return (
    <div className="mt-6 flex flex-col rounded-lg bg-white text-surface shadow-shadowSmall border-2 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <Image
          src={image}
          alt={ctaText ? ctaText : ""}
          width={500}
          height={200}
          className="overflow-hidden rounded-t-lg"
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{ctaText}</h5>
        <p className="mb-4 text-base">{about}</p>

        <div className="flex flex-col mt-auto space-y-2 text-sm text-neutral-500 dark:text-neutral-300">
          <div>
            <img src={rating} alt="Rating" />
          </div>
          <Link
            href={ctaLink ? ctaLink : ""}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Visit hotel website
          </Link>
        </div>
      </div>
      <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
        <Button variant={"orange"} className="w-full">
          Show prices
        </Button>
      </div>
    </div>
  );
}

export default Layout4;
