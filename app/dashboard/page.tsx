import Avatar from "@/components/elements/Avatar";
import Image from "next/image";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Heart_f, Star_f, Travelbag_f } from "./icons";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <div className="relative h-[200px]">
        <Image
          src={"/hero.jpeg"}
          alt=""
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div>
        {user?.picture && user?.given_name && user.family_name && (
          <div className="w-full -mt-16 text-center flex flex-col items-center space-y-2">
            <Avatar
              src={user?.picture}
              alt={user?.given_name}
              fallBack={
                user?.given_name[0].toUpperCase() +
                user?.family_name[0].toUpperCase()
              }
              className="w-32 h-32"
            />
            <h3>
              {user?.given_name} {user.family_name}
            </h3>
            <p className="text-base">{user?.email}</p>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-3 items-center text-center mt-6 gap-6">
        <div className="rounded-xl shadow-shadowSmall border-2 min-h-[100px] py-4 px-6">
          <div className="flex items-center">
            <Heart_f className="w-10 h-10" />
            <p className="font-bold text-lg ml-2">Favorite Locations</p>

            <h1 className="flex-1 text-right">5</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-shadowSmall border-2 min-h-[100px] py-4 px-6">
          <div className="flex items-center">
            <Star_f className="w-10 h-10" />
            <p className="font-bold text-lg ml-2">Places</p>

            <h1 className="flex-1 text-right">8</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-shadowSmall border-2 min-h-[100px] py-4 px-6">
          <div className="flex items-center">
            <Travelbag_f className="w-10 h-10" />
            <p className="font-bold text-lg ml-2">Planned Trip</p>

            <h1 className="flex-1 text-right">3</h1>
          </div>
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
            <DialogDescription>Here you can see your plan</DialogDescription>
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
