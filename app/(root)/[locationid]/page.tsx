"use client";
import React, { useEffect } from "react";
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

export default async function page({ params }: any) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isLogged = await isAuthenticated();
  const user = await getUser();

  const { locationid } = params;
  const location = getLocationDetailsById(locationid);

  if (location["data"] == undefined) {
    notFound();
  }

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

          {isLogged && user && (
            <CardFooter className="text-left">
              <SaveLocation userId={user.id} locationId={locationid} />
            </CardFooter>
          )}
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
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-shadowSmall">
          <Map
            center={[
              parseFloat(location.getLatitude()),
              parseFloat(location.getLongitude()),
            ]}
            zoom={13}
            markers={[
              [
                parseFloat(location.getLatitude()),
                parseFloat(location.getLongitude()),
              ],
            ]}
          />
        </div>
      </div>
      </div>
    </MaxLimitWrapper>
  );
}
