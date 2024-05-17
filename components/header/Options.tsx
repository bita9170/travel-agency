"use client";

import React from "react";
import {
  HotelsIcon,
  RestaurantsIcon,
  SearchAllIcon,
  ThingsToDoIcon,
} from "./IconsHeader";
import { Button } from "../ui/button";
import Link from "next/link";

function Options() {
  return (
    <div className="header-bottom space-y-2">
      <h1 className="hidden sm:block">Where to?</h1>

      <div className="search-navigation">
        <div className="navigation text-center">
          <Button variant={"link"} asChild className="text-black active">
            <Link href="#">
              <SearchAllIcon className="mr-1" />
              Search All
            </Link>
          </Button>

          <Button variant={"link"} asChild className="text-black">
            <Link href="/hotels">
              <HotelsIcon className="mr-1" />
              Hotels
            </Link>
          </Button>

          <Button variant={"link"} asChild className="text-black">
            <Link href="#">
              <ThingsToDoIcon className="mr-1" />
              Things to Do
            </Link>
          </Button>

          <Button variant={"link"} asChild className="text-black">
            <Link href="#">
              <RestaurantsIcon className="mr-1" />
              Restaurants
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto shadow-shadowSmall border-2 rounded-3xl px-4 py-1 my-2 overflow-hidden md:px-1">
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex items-center w-full border-b-2 md:border-none py-2 md:py-0">
            <svg className="h-8 w-8 text-gray-400 mx-3" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>

            <input
              type="text"
              className="w-full py-2 placeholder-gray-400 focus:outline-none"
              placeholder="Place to go, things to do, hotels..."
            />
          </div>
          <Button variant={"green"} className="w-full my-4 md:w-auto md:my-0">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Options;
