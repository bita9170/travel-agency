"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  createSaveLocation,
  getSaveLocationsByUserId,
  removeSaveLocation,
} from "@/controllers/saveLocationController";
import { toast } from "sonner";
import { ISaveLocation } from "@/controllers/saveLocationController";

export interface IResult {
  message: string;
  value: string;
}
function SaveLocation(props: any) {
  const { userId, locationId } = props;
  const [favorite, setFavorite] = useState<string>("");
  const [plans, setPlans] = useState<string>("");
  const [place, setPlace] = useState<string>("");

  let result: IResult;

  useEffect(() => {
    const fetchData = async () => {
      const saveLocations: ISaveLocation[] = await getSaveLocationsByUserId(
        userId,
        locationId
      );

      if (saveLocations) {
        saveLocations.map((item) => {
          switch (item.type) {
            case "favorite":
              setFavorite(item._id);
              break;
            case "plans":
              setPlans(item._id);
              break;
            case "place":
              setPlace(item._id);
              break;
            default:
              break;
          }
        });
      }
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [favorite, plans, place]);
  return (
    <div className="flex justify-between w-full">
      <div className="flex space-x-2">
        <div
          onClick={async () => {
            favorite
              ? (result = await removeSaveLocation(favorite))
              : (result = await createSaveLocation(
                  userId,
                  locationId,
                  "favorite"
                ));
            setFavorite(result.value);
            toast(result.message, { position: "top-left" });
          }}
        >
          {favorite ? svgIcons.heart_f : svgIcons.heart}
        </div>

        <div
          onClick={async () => {
            place
              ? (result = await removeSaveLocation(place))
              : (result = await createSaveLocation(
                  userId,
                  locationId,
                  "place"
                ));
            setPlace(result.value);
            toast(result.message, { position: "top-left" });
          }}
        >
          {place ? svgIcons.star_f : svgIcons.star}
        </div>

        <div
          onClick={async () => {
            plans
              ? (result = await removeSaveLocation(plans))
              : (result = await createSaveLocation(
                  userId,
                  locationId,
                  "plans"
                ));
            setPlans(result.value);
            toast(result.message, { position: "top-left" });
          }}
        >
          {plans ? svgIcons.travelbag_f : svgIcons.travelbag}
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <Link href="#">
          <div>{svgIcons.link}</div>
        </Link>
        <Link href="#">
          <div>{svgIcons.map}</div>
        </Link>
      </div>
    </div>
  );
}

export default SaveLocation;

const svgIcons = {
  star_f: (
    <svg className="fill-yellow-600 h-6 w-6" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
    </svg>
  ),
  star: (
    <svg className="h-6 w-6" viewBox="0 0 24 24">
      <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
    </svg>
  ),
  heart_f: (
    <svg className="h-6 w-6 fill-red-600" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  ),
  heart: (
    <svg className="h-6 w-6" viewBox="0 0 24 24">
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
    </svg>
  ),
  map: (
    <svg className="w-6" viewBox="0 0 576 512">
      <path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"></path>
    </svg>
  ),
  link: (
    <svg className="w-6" viewBox="0 0 24 24">
      <path d="m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  time: (
    <svg className="w-6" viewBox="0 0 24 24">
      <path d="M12 4C7.03 4 3 8.03 3 13s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z"></path>
    </svg>
  ),
  travelbag_f: (
    <svg className="w-6 fill-green-10" viewBox="0 0 24 24">
      <path d="M17 6h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zm.75-12h-3V3.5h3V6zM16 18h-1.5V9H16v9z" />
    </svg>
  ),
  travelbag: (
    <svg className="w-6" viewBox="0 0 24 24">
      <path d="M12.75 9v.92l1.75 1.75V9H16v4.17l3 3V8c0-1.1-.9-2-2-2h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3h-.17l3 3h.92zM10.5 3.5h3V6h-3V3.5zm10.69 17.69L2.81 2.81 1.39 4.22l3.63 3.63c0 .05-.02.1-.02.15v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c.34 0 .65-.09.93-.24l1.85 1.85 1.41-1.42zM8 18v-7.17l1.5 1.5V18H8zm4.75 0h-1.5v-3.92l1.5 1.5V18z"></path>
    </svg>
  ),
};
