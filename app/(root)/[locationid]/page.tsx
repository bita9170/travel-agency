import React from "react";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  getLocationDetailsById
} from "@/lib/data/location";
import Tab, { TabProps } from "@/components/tabsection/Tab";
import { RecommendedElement, RecommendedElement2 } from "@/components/tab/content";

const svgIcons = {
  star: (
    <svg
      style={{ width: "14px", height: "14px", fill: "var(--green-30)" }}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
    </svg>
  ),
  halfstar: (
    <svg style={{ width: "14px", height: "14px" }} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="var(--green-30)" />
          <stop offset="50%" stopColor="white" />
        </linearGradient>
      </defs>
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="url(#halfGradient)"
      ></path>
    </svg>
  ),
  heart: (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  ),
  map: (
    <svg style={{ width: "24px" }} viewBox="0 0 576 512">
      <path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"></path>
    </svg>
  ),
  link: (
    <svg style={{ width: "24px" }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  time: (
    <svg style={{ width: "24px" }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 4C7.03 4 3 8.03 3 13s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z"></path>
    </svg>
  ),
  travelbag: (
    <svg style={{ width: "24px" }} viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zM16 18h-1.5V9H16v9zm1-12h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.5-2.5h3V6h-3V3.5zM17 19H7V8h10v11z"></path>
    </svg>
  ),
};

export default function page({ params }: any) {
  const { locationid } = params;
  const location = getLocationDetailsById(locationid);

  const dataDrop: TabProps[] = [
    {
      title: "Recommended",
      content: <RecommendedElement />,
    },
    {
      title: "Walking & Biking",
      content: <RecommendedElement2 />,
    },
    {
      title: "Cultural & Theme Tours",
      content: <RecommendedElement />,
    },
    {
      title: "Sightseeing Tickets&",
      content: <RecommendedElement2 />,
    },
  ];

  return (
    <MaxLimitWrapper className="px-4 md:px-0">
      <div className="flex gap-1">
        <h3>{location.getName()}</h3>
        <img src={location.getRatingImageUrl()} alt="Rating" className="h-6" />
      </div>
      <div className="grid md:flex gap-2 items-center">
        <div>
          {location
            .getNumReviews()
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}{" "}
          reviews
        </div>
        <span className="text-2xl hidden md:inline">•</span>
        <div>{location.getRankingData().ranking_string}</div>

        {location.getGroups()[0].categories.map((category, index) => (
          <div key={index} className="flex gap-2 items-center">
            <span className="text-2xl hidden md:inline">•</span>
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-base font-bold">
          {location.getHours().weekday_text[new Date().getDay()]}
        </p>
        <span className="text-2xl">•</span>
        <p className="text-base">Write a review</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 ">
        <Card className="shadow-shadowSmall border-2 rounded-xl flex flex-col">
          <CardHeader className="font-bold">About</CardHeader>
          <CardContent className="flex-1">
            {location.getDescription()}
          </CardContent>
          <CardFooter className="text-left">
            <div className="flex justify-between w-full">
              <div className="flex space-x-2">
                <Link href="">
                  <div>{svgIcons.heart}</div>
                </Link>
                <Link href="">
                  <div>{svgIcons.link}</div>
                </Link>
                <Link href="">
                  <div>{svgIcons.travelbag}</div>
                </Link>
              </div>

              <Link href="">
                <div>{svgIcons.map}</div>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="h-[500px] w-full border-2 sm:m-auto relative rounded-xl overflow-hidden col-span-2">
          <Image
            src={location.getPhotos()[1].getLarge().url}
            alt={location.getName()}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="my-8">
        <Tab data={dataDrop} tabsHeading="Top way to experience Eiffel Tower" />
      </div>

      <div className="my-8 grid md:grid-cols-2">
        <div className="lg:col-span-1 flex flex-col justify-start p-2">
          <h3 className="font-bold text-base">The Area</h3>
          <p className="mt-3 text-base">
            <a
              href={`https://maps.google.com/?q=${
                location.getAddress().address_string
              }`}
              target="_blank"
            >
              {location.getAddress().address_string}
            </a>
          </p>
          <p className="font-bold text-[16px]">
            Neighborhood: {location.getNeighborhoodInfo()[0].name}
          </p>
          <div className="text-[16px]">
            {/* <h4 className="mt-3 font-semibold">How to get there</h4>
            <p>Champ de Mars - Tour Eiffel, 7 min walk</p>
            <p>Bir-Hakeim, 8 min walk</p> */}
            <h4 className="mt-3 font-semibold">Reach out directly</h4>
            <a href={location.getWebsite()} target="_blank">
              Visit website
            </a>
            |<a href={`tel:${location.getPhone()}`}>Call</a>
            {/* <h4 className="mt-3 font-semibold">Best nearby</h4>
            <p>Restaurants: 10,000 within 3 miles</p>
            <p>Attractions: 4,022 within 6 miles</p> */}
          </div>
        </div>

        <div className="lg:col-span-1 flex justify-center items-center">
          <div className="w-full h-[300px] relative">
            <Image
              src="/map.png"
              alt="Map of Eiffel Tower Area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </MaxLimitWrapper>
  );
}


