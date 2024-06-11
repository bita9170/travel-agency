import React from "react";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Tab, { TabProps } from "@/components/tabsection/Tab";
import {
  RecommendedElement,
  RecommendedElement2,
} from "@/components/tab/content";
import SaveLocation from "@/components/elements/SaveLocation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import { getLocationDetails } from "@/controllers/tripadvisorController";
import Options from "@/components/header/Options";
import Map from "@/components/Map";
export default async function page({ params }: any) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isLogged = await isAuthenticated();
  const user = await getUser();

  const { locationid } = params;
  const location = await getLocationDetails(locationid);

  if (location == undefined) {
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
    <>
      <Options />
      <MaxLimitWrapper className="px-4 md:px-0 my-4">
        <div className="flex gap-1 items-center">
          <h2>{location[0].getName()}</h2>
          {location[0].getRatingImageUrl() && (
            <Image
              src={location[0].getRatingImageUrl()}
              alt="Rating"
              height={0}
              width={0}
              className="h-6 w-auto"
            />
          )}
        </div>
        <div className="grid md:flex gap-2 items-center">
          {location[0].getCategory().name !== "geographic" && (
            <>
              <div>
                {location[0]
                  .getNumReviews()
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}{" "}
                reviews
              </div>
              <span className="text-2xl hidden md:inline">•</span>
              <div>{location[0].getRankingData().ranking_string}</div>

              {location[0].getGroups() &&
                location[0].getGroups()[0].categories.map((category, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <span className="text-2xl hidden md:inline">•</span>
                    <span>{category.name}</span>
                  </div>
                ))}
            </>
          )}
        </div>

        {location[0].getHours() && (
          <div className="flex gap-2 items-center">
            <p className="text-base font-bold">
              {location[0].getHours().weekday_text[new Date().getDay()]}
            </p>
            <span className="text-2xl">•</span>
            <p className="text-base">Write a review</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-4 ">
          <Card className="shadow-shadowSmall border-2 rounded-xl flex flex-col">
            <CardHeader className="font-bold">About</CardHeader>
            <CardContent className="flex-1">
              {location[0].getDescription()}
            </CardContent>

            <CardFooter className="text-left">
              <SaveLocation
                userId={user ? user.id : "0"}
                locationId={user ? locationid : "0"}
              />
            </CardFooter>
          </Card>

          <div className="h-[500px] w-full border-2 sm:m-auto relative rounded-xl overflow-hidden col-span-2">
            <Image
              src={await location[0].getImage()}
              alt={location[0].getName()}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="my-8">
          <Tab
            data={dataDrop}
            tabsHeading="Top way to experience Eiffel Tower"
          />
        </div>

        <div className="my-8 grid md:grid-cols-2">
          <div className="lg:col-span-1 flex flex-col justify-start p-2">
            <h3 className="font-bold text-base">The Area</h3>
            <p className="mt-3 text-base">
              <a
                href={`https://maps.google.com/?q=${
                  location[0].getAddress().address_string
                }`}
                target="_blank"
              >
                {location[0].getAddress().address_string}
              </a>
            </p>

            {location[0].getNeighborhoodInfo().length > 0 && (
              <p className="font-bold text-[16px]">
                Neighborhood: {location[0].getNeighborhoodInfo()[0].name}
              </p>
            )}

            {location[0].getWebsite() ||
              (location[0].getPhone() && (
                <div className="text-[16px]">
                  <h4 className="mt-3 font-semibold">Reach out directly</h4>
                  {location[0].getWebsite() && (
                    <a href={location[0].getWebsite()} target="_blank">
                      Visit website
                    </a>
                  )}
                  {location[0].getPhone() && (
                    <>
                      |<a href={`tel:${location[0].getPhone()}`}>Call</a>
                    </>
                  )}
                </div>
              ))}
          </div>

          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="w-full h-[300px] relative">
              <Map
                center={[
                  parseFloat(location[0].getLatitude()),
                  parseFloat(location[0].getLongitude()),
                ]}
                zoom={location[0].getCategory().name == "geographic" ? 12 : 16}
                markers={[
                  [
                    parseFloat(location[0].getLatitude()),
                    parseFloat(location[0].getLongitude()),
                  ],
                ]}
              />
            </div>
          </div>
        </div>
      </MaxLimitWrapper>
    </>
  );
}
