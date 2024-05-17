import React from "react";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
// import { getLocationDetails } from "@/controllers/tripadvisorController";
// import { LocationDetails } from "@/lib/class/location";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const LocationDetails = [
  //static Data

  {
    title: "Eiffelturm",
    reviews: "142,687 Bewertungen",
    categories:
      "Sehenswürdigkeiten & Wahrzeichen • Aussichtsplattformen & -türme",
    hours: "Jetzt geöffnet • 9:00 AM - 11:45 PM",
    about:
      "Der Eiffelturm, ein Wahrzeichen der Architektur und Ingenieurskunst, zieht jährlich Millionen Besucher an. Als Symbol von Paris bietet der Turm atemberaubende Ausblicke auf die Stadt. Der Besuch kann mehr als drei Stunden dauern und umfasst Optionen für Führungen sowie den Zugang zu verschiedenen Ebenen des Turms.",
    duration: "Mehr als 3 Stunden",
    image: "/eifelturm.jpeg",
  },
];

// async function page({ params }: any) {
//   //   const { locationid } = params;
//   //   const locations: LocationDetails[] = await getLocationDetails(locationid);
//   //   const location = locations[0];

//   return (
//     <MaxLimitWrapper>
//       {/* <h3>{location.getName()}</ h3>
//       <img src={(await location.getPhotos())[0].getLarge().url} />
//       <div> {location.getDescription()}</div> */}
//     </MaxLimitWrapper>
//   );
// }

export default function LocationDetailsCard() {
  return (
    <>
      <div className="relative w-full h-52">
        <Image
          style={{ position: "absolute", left: "5%" }}
          src={LocationDetails[0].image}
          alt="Eiffelturm"
          fill
          className="object-contain"
        />
      </div>

      <CardTitle>{LocationDetails[0].title}</CardTitle>
      <Card className="w-[350px] shadow-lg mt-8">
        <MaxLimitWrapper>
          <CardHeader>
            <CardDescription>{LocationDetails[0].reviews}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{LocationDetails[0].categories}</p>
            <p>{LocationDetails[0].hours}</p>
            <p>{LocationDetails[0].about}</p>
          </CardContent>
          <CardFooter>
            <p>Dauer: {LocationDetails[0].duration}</p>
          </CardFooter>
        </MaxLimitWrapper>
      </Card>
    </>
  );
}
