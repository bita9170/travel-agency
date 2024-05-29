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
import Layout4 from "../tiles/Layout4";
import { LocationDetails } from "@/lib/class/location/LocationDetails";
import { getAllLocationDetails } from "@/lib/data/location";

export async function DialogSaveLocations({
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
  try {
    const saveLocations: ISaveLocation[] = await getSaveLocationsByUserId(
      userId,
      "0"
    );
  } catch (error) {
    console.error("Error fetching save locations:", error);
  }

  const locations: LocationDetails[] = getAllLocationDetails();

  return (
    <DialogShadcn>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{type}</DialogTitle>
        </DialogHeader>
        <div className="grid-cols-1 sm:grid md:grid-cols-2 gap-4">
          {/* {saveLocations.map((saveLocation: ISaveLocation) => ( */}
          <Layout4
            key={locations[0].getLocationId()}
            image={locations[0].getPhotos()[0].getLarge().url}
            ctaText={locations[0].getName()}
            ctaLink={locations[0].getWebsite()}
            rating={locations[0].getRatingImageUrl()}
            about={locations[0].getDescription()}
          />
          {/* ))} */}
        </div>
      </DialogContent>
    </DialogShadcn>
  );
}
