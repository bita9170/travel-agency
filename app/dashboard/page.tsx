import React from "react";
import { Button } from "@/components/ui/button";
import {
  MyFavoritesIcon,
  MyPlanIcon,
  MyPlacesIcon,
  MyReviewsIcon,
  NewPostIcon,
  ShowReviewsIcon,
  SocialNetworksIcon,
  PagesLayoutIcon,
  EditProfileIcon,
} from "./icons";

function page() {
  return (
    <div className="dashboard-section flex py-10">
      <div className="ml-5 flex flex-col">
        <h5 className="font-bold">User Menu</h5>
        <ul>
          <li>
            {" "}
            <MyFavoritesIcon />
            Edit Profile
          </li>

          <li>
            <MyPlanIcon />
            My Plan
          </li>

          <li>
            <MyFavoritesIcon />
            My Favorites
          </li>

          <li>
            <MyPlacesIcon />
            My Places
          </li>

          <li>
            <MyReviewsIcon />
            My Reviews
          </li>
        </ul>

        <div className="mt-12">
          <h3>Admin Menu</h3>
          <ul>
            <li>
              <NewPostIcon />
              New Post
            </li>

            <li>
              <ShowReviewsIcon />
              Show Reviews
            </li>

            <li>
              <SocialNetworksIcon />
              Socila Networks
            </li>

            <li>
              <PagesLayoutIcon />
              Pages Layout
            </li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <div>
          <h3 className="font-bold">All Posts</h3>
        </div>
      </div>
    </div>
  );
}

export default page;
