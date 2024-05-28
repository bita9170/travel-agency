"use client";
import React, { useState, useEffect } from "react";
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Layout2 from "@/components/tiles/Layout2";
import { getSaveLocationsByUserId, ISaveLocation } from "@/controllers/saveLocationController";

function Page() {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<ISaveLocation[]>([]);

  const userId = "user-id";

  useEffect(() => {
    const fetchFavorites = async () => {
      const saveLocations: ISaveLocation[] = await getSaveLocationsByUserId(userId);
      const favorites = saveLocations.filter(location => location.type === "favorite");
      setFavorites(favorites);
    };

    fetchFavorites().catch(console.error);
  }, [userId]);

  const openDialog = (id: string) => setOpenDialogId(id);
  const closeDialog = () => setOpenDialogId(null);

  return (
    <div className="dashboard-section flex py-10">
      <div className="ml-5 flex flex-col">
        <h5 className="font-bold">User Menu</h5>
        <ul>
          <li className="flex items-center">
            <EditProfileIcon />
            <span>Edit Profile</span>
          </li>
          <li onClick={() => openDialog("myPlan")} className="cursor-pointer flex items-center">
            <MyPlanIcon />
            <span>My Plan</span>
          </li>
          <li onClick={() => openDialog("myFavorites")} className="cursor-pointer flex items-center">
            <MyFavoritesIcon />
            <span>My Favorites</span>
          </li>
          <li onClick={() => openDialog("myPlaces")} className="cursor-pointer flex items-center">
            <MyPlacesIcon />
            <span>My Places</span>
          </li>
          <li className="flex items-center">
            <MyReviewsIcon />
            <span>My Reviews</span>
          </li>
        </ul>

        <div className="mt-12">
          <h3>Admin Menu</h3>
          <ul>
            <li className="flex items-center">
              <NewPostIcon />
              <span>New Post</span>
            </li>
            <li className="flex items-center">
              <ShowReviewsIcon />
              <span>Show Reviews</span>
            </li>
            <li className="flex items-center">
              <SocialNetworksIcon />
              <span>Social Networks</span>
            </li>
            <li className="flex items-center">
              <PagesLayoutIcon />
              <span>Pages Layout</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <div>
          <h3 className="font-bold">All Posts</h3>
        </div>
      </div>

    
      <Dialog open={openDialogId === "myFavorites"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[80%]">
          <DialogHeader>
            <DialogTitle>My Favorites</DialogTitle>
            <DialogDescription>
              Here you can see all your favorite posts
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="grid gap-4 py-4">
              {favorites.map((favorite) => (
                <Layout2
                  key={favorite._id}
                  image={favorite.image || "/default.jpg"}
                  ctaText={favorite.title || "Default Title"}
                  rating={favorite.rating || "Default Rating"}
                  ctaLink={favorite.link || "#"}
                />
              ))}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openDialogId === "myPlan"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[80%]">
          <DialogHeader>
            <DialogTitle>My Plan</DialogTitle>
            <DialogDescription>
              Here you can see your plan
            </DialogDescription>
          </DialogHeader>
          {/* Add content for My Plan here */}
        </DialogContent>
      </Dialog>

      <Dialog open={openDialogId === "myPlaces"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[80%]">
          <DialogHeader>
            <DialogTitle>My Places</DialogTitle>
            <DialogDescription>
              Here you can see your saved places
            </DialogDescription>
          </DialogHeader>
          {/* Add content for My Places here */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Page;
