"use client";

import React from "react";
import {
  HotelsIcon,
  RestaurantsIcon,
  SearchAllIcon,
  ThingsToDoIcon,
} from "./IconsHeader";
import { Button } from "../ui/button";

function Options() {
  return (
    <div>
      <h1 className=" text-center text-7xl font-bold hidden sm:block">Where to</h1>

      <div className="flex justify-center text-center mt-12 font-bold">
        <button className=" flex items-center px-5">
          <SearchAllIcon />
          Search All
        </button>

        <button className=" flex items-center  px-5 ">
          <HotelsIcon />
          Hotels
        </button>

        <button className="flex items-center px-5">
          <ThingsToDoIcon />
          Things to Do
        </button>

        <button className="flex items-center px-5">
          <RestaurantsIcon />
          Restaurants
        </button>
      </div>

      <div className="max-w-screen-md mx-auto border-2 rounded-[25px] p-1 my-2">
        <div className="flex items-center ">
          <svg className="h-6 w-6 text-gray-400 mr-2" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>

          <input
            type="text"
            className="w-full py-2 placeholder-gray-400 focus:outline-none"
            placeholder="Place to go, things to do, hotels..."
          />
          <Button className="  bg-green-brand text-black rounded-[25px]">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Options;
