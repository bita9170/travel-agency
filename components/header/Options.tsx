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
import Search from "./Search";

interface OptionsProps {
  showTitle?: boolean;
}

const Options: React.FC<OptionsProps> = ({ showTitle = true }) => {

  return (
    <div className="header-bottom space-y-2">
      {showTitle && <h1 className="hidden sm:block">Where to?</h1>}

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
            <Link href="restaurants">
              <RestaurantsIcon className="mr-1" />
              Restaurants
            </Link>
          </Button>

          <Button variant={"link"} asChild className="text-black">
            <Link href="/blog">
              <ThingsToDoIcon className="mr-1" />
              Things to Do
            </Link>
          </Button>
        </div>
      </div>

      <Search /> 
    </div>
  );
};

export default Options;