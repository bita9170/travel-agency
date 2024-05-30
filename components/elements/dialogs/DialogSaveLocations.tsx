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
import Layout4 from "../../tiles/Layout4";
import { LocationDetails } from "@/lib/class/location/LocationDetails";
import {
  getAllLocationDetails,
  getLocationDetailsById,
} from "@/lib/data/location";
import { useEffect, useState } from "react";
import Layout1 from "@/components/tiles/Layout1";

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
  let locations: LocationDetails[] = getAllLocationDetails();
  const [saveLocations, setSaveLocations] = useState<ISaveLocation[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setSaveLocations(await getSaveLocationsByUserId(userId));
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <DialogShadcn>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{type.toUpperCase()}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-3 gap-4">
          {saveLocations.map(
            (saveLocation: ISaveLocation) =>
              saveLocation.type == type &&
              locations
                .filter(
                  (location) =>
                    location.getLocationId() === saveLocation.locationId
                )
                .map((item) => (
                  <Layout1
                    key={item.getLocationId()}
                    image={item.getPhotos()[0].getLarge().url}
                    ctaText={item.getName()}
                    ctaLink={item.getWebsite()}
                    minHeight="min-h-[200px]"
                  />
                ))
          )}
          {!saveLocations && <h1>You do not have any {type} location(s)</h1>}
        </div>
      </DialogContent>
    </DialogShadcn>
  );
}
