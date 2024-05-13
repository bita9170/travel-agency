import React from "react";
import Layout2 from "@/components/tiles/Layout2";
import MaxLimitWrapper from "../elements/MaxLimitWrapper";
import { Button } from "../ui/button";
import Link from "next/link";

interface Layout4Props {
  image: string;
  ctaText?: string;
  ctaLink?: string;
  rating?: string;
  category?: string;
}

function Layout4({ ctaText, ctaLink, rating, category }: Layout4Props) {
  return (
    <>
      <MaxLimitWrapper>
        <div className="tile-layout-4 border hover:shadow-lg rounded-xl">
          <div className="flex flex-wrap justify-center md:justify-start -mx-4">
            <div className="w-full md:w-[320px] px-4">
              <Layout2 image="/image1.jpeg" />
            </div>

            <div
              className="w-full flex flex-col justify-center
             md:w-1/3 px-24 mb-8"
            >
              <Button className="text-black hover:bg-primary-dark w-full">
                Booking/Preis?
              </Button>

              <input //Later, shadcn will be used for this part
                type="text"
                placeholder="Date Picker"
                className="w-full border-2 rounded-lg p-2 my-2"
              />
            </div>

            <div className="w-full grid md:w-1/3 px-4 mb-8">
              {/* <img src={rating} alt="Rating" /> */}
              <div>
                {ctaText && ctaLink && (
                  <Link href={ctaLink}>
                    <h3>{ctaText}</h3>
                  </Link>
                )}
                <p>{category}</p>
              </div>
              <Link href="#">View on map</Link>
              <Link href="#">Visit hotel website</Link>
            </div>
          </div>
        </div>
      </MaxLimitWrapper>
    </>
  );
}

export default Layout4;
