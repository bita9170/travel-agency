"use client";
import {
  Dialog as DialogShadcn,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ISaveLocation,
  getSaveLocationsByUserId,
} from "@/controllers/saveLocationController";
import { useEffect, useState } from "react";
import Layout1 from "@/components/tiles/Layout1";
import { getLocationDetails } from "@/controllers/tripadvisorControllerClient";

export function DialogSaveLocations({
  children,
  userId,
  type,
  className,
}: {
  children: React.ReactNode;
  userId: string;
  type: string;
  className?: string;
}) {
  const [locations, setLocations] = useState<[]>();
  useEffect(() => {
    const fetchData = async () => {
      const saveLocations = await getSaveLocationsByUserId(userId);
      setLocations(
        await getLocationDetails(
          saveLocations
            .filter((item: ISaveLocation) => item.type == type)
            .map((saveLocation: ISaveLocation) => saveLocation.locationId)
            .map(Number)
        )
      );
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  const getImage = () => {
    const arr: number[] = [57, 49, 28, 27, 74, 84, 122, 124, 142, 249];
    const ind = Math.floor(Math.random() * arr.length);

    return `https://picsum.photos/id/${arr.splice(ind, 1)[0]}/4106/2806`;
  };

  return (
    <DialogShadcn>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{type.toUpperCase()}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-3 gap-4">
          {locations &&
            locations.map(async (location) => (
              <Layout1
                key={location["location_id"]}
                image={getImage()}
                ctaText={location["name"]}
                ctaLink={`/${location["location_id"]}`}
                minHeight="min-h-[200px]"
              />
            ))}
        </div>
        {!locations && (
          <h3 className="text-center">
            You do not have any {type} location(s)
          </h3>
        )}
      </DialogContent>
    </DialogShadcn>
  );
}
