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
import Link from "next/link";

const LocationDetails = [
  //static Data

  {
    title: "Eiffelturm",
    reviews: "142,687 Bewertungen",
    categories:
      "Sehenswürdigkeiten & Wahrzeichen • Aussichtsplattformen & -türme",
    hours: (
      <span>
        <span className="text-[--green-30]">Jetzt geöffnet</span> • 9:00 AM -
        11:45 PM
      </span>
    ),
    about:
      "Der Eiffelturm, ein Wahrzeichen der Architektur und Ingenieurskunst, zieht jährlich Millionen Besucher an. Als Symbol von Paris bietet der Turm atemberaubende Ausblicke auf die Stadt. Der Besuch kann mehr als drei Stunden dauern und umfasst Optionen für Führungen sowie den Zugang zu verschiedenen Ebenen des Turms.",
    duration: "Mehr als 3 Stunden",
    image: "/eifelturm.jpeg",
  },
];

const mapData = {
  address: "5 Avenue, 75007 Paris, France",
  neighborhood: "Gros-Caillou",
  transport: [
    {
      name: "Champ de Mars - Tour Eiffel",
      walkTime: "7 min walk",
    },
    {
      name: "Bir-Hakeim",
      walkTime: "8 min walk",
    },
  ],
  contact: {
    websiteURL: "http://example.com",
    phone: "+49 88 565 77",
  },
  nearby: {
    restaurants: "10,000 within 3 miles",
    attractions: "4,022 within 6 miles",
  },
  mapImage: "/map.png",
};

const data = {
  location_id: "188151",
  name: "Eiffel Tower",
  description:
    "Completed in 1889, this colossal landmark, although initially hated by many Parisians, is now a famous symbol of French civic pride.",
  web_url:
    "https://www.tripadvisor.com/Attraction_Review-g187147-d188151-Reviews-Eiffel_Tower-Paris_Ile_de_France.html?m=66827",
  address_obj: {
    street1: "5 Avenue",
    city: "Paris",
    country: "France",
    postalcode: "75007",
    address_string: "5 Avenue, 75007 Paris France",
  },
  ancestors: [
    {
      level: "City",
      name: "Paris",
      location_id: "187147",
    },
    {
      level: "Region",
      name: "Ile-de-France",
      location_id: "187144",
    },
    {
      level: "Country",
      name: "France",
      location_id: "187070",
    },
  ],
  latitude: "48.858353",
  longitude: "2.294464",
  timezone: "Europe/Paris",
  phone: "+33 892 70 12 39",
  website: "https://www.toureiffel.paris/",
  write_review:
    "https://www.tripadvisor.com/UserReview-g187147-d188151-Eiffel_Tower-Paris_Ile_de_France.html?m=66827",
  ranking_data: {
    geo_location_id: "187147",
    ranking_string: "#12 of 3,562 things to do in Paris",
    geo_location_name: "Paris",
    ranking_out_of: "3562",
    ranking: "12",
  },
  rating: "4.5",
  rating_image_url:
    "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg",
  num_reviews: "142,314",
  review_rating_count: {
    "1": "1397",
    "2": "1922",
    "3": "8751",
    "4": "29831",
    "5": "100409",
  },
  photo_count: "104085",
  see_all_photos:
    "https://www.tripadvisor.com/Attraction_Review-g187147-d188151-m66827-Reviews-Eiffel_Tower-Paris_Ile_de_France.html#photos",
  hours: {
    periods: [
      {
        open: {
          day: 1,
          time: "0900",
        },
        close: {
          day: 1,
          time: "2345",
        },
      },
      {
        open: {
          day: 2,
          time: "0900",
        },
        close: {
          day: 2,
          time: "2345",
        },
      },
      {
        open: {
          day: 3,
          time: "0900",
        },
        close: {
          day: 3,
          time: "2345",
        },
      },
      {
        open: {
          day: 4,
          time: "0900",
        },
        close: {
          day: 4,
          time: "2345",
        },
      },
      {
        open: {
          day: 5,
          time: "0900",
        },
        close: {
          day: 5,
          time: "2345",
        },
      },
      {
        open: {
          day: 6,
          time: "0900",
        },
        close: {
          day: 6,
          time: "2345",
        },
      },
      {
        open: {
          day: 7,
          time: "0900",
        },
        close: {
          day: 7,
          time: "2345",
        },
      },
    ],
    weekday_text: [
      "Monday: 09:00 - 23:45",
      "Tuesday: 09:00 - 23:45",
      "Wednesday: 09:00 - 23:45",
      "Thursday: 09:00 - 23:45",
      "Friday: 09:00 - 23:45",
      "Saturday: 09:00 - 23:45",
      "Sunday: 09:00 - 23:45",
    ],
  },
  category: {
    name: "attraction",
    localized_name: "Attraction",
  },
  subcategory: [
    {
      name: "landmarks",
      localized_name: "Sights & Landmarks",
    },
    {
      name: "attractions",
      localized_name: "Attractions",
    },
  ],
  groups: [
    {
      name: "Sights & Landmarks",
      localized_name: "Sights & Landmarks",
      categories: [
        {
          name: "Points of Interest & Landmarks",
          localized_name: "Points of Interest & Landmarks",
        },
        {
          name: "Observation Decks & Towers",
          localized_name: "Observation Decks & Towers",
        },
      ],
    },
  ],
  neighborhood_info: [
    {
      location_id: "15621622",
      name: "Gros-Caillou",
    },
    {
      location_id: "7236767",
      name: "Tour Eiffel / Invalides",
    },
    {
      location_id: "15621644",
      name: "7th Arr. - Palais-Bourbon",
    },
  ],
  trip_types: [
    {
      name: "business",
      localized_name: "Business",
      value: "2505",
    },
    {
      name: "couples",
      localized_name: "Couples",
      value: "54863",
    },
    {
      name: "solo",
      localized_name: "Solo travel",
      value: "7937",
    },
    {
      name: "family",
      localized_name: "Family",
      value: "35324",
    },
    {
      name: "friends",
      localized_name: "Friends getaway",
      value: "21630",
    },
  ],
  awards: [
    {
      award_type: "Travelers Choice Best of the Best",
      year: "2023",
      images: {
        tiny: "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_bob_2023_L.png",
        small:
          "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_bob_2023_L.png",
        large:
          "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_bob_2023_L.png",
      },
      categories: ["TopAttractions"],
      display_name: "Travelers Choice Best of the Best",
    },
    {
      award_type: "Travelers Choice",
      year: "2023",
      images: {
        tiny: "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png",
        small:
          "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png",
        large:
          "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png",
      },
      categories: [],
      display_name: "Travelers Choice",
    },
  ],
};

// const photos = {
//   data: [
//     {
//       id: 446594973,
//       is_blessed: false,
//       caption: "Eiffeltoren",
//       published_date: "2020-01-16T19:17:25.925Z",
//       images: {
//         thumbnail: {
//           height: 50,
//           width: 50,
//           url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/9e/7f/9d/eiffeltoren.jpg",
//         },
//         medium: {
//           height: 200,
//           width: 180,
//           url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/9e/7f/9d/eiffeltoren.jpg",
//         },
//         small: {
//           height: 150,
//           width: 150,
//           url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/9e/7f/9d/eiffeltoren.jpg",
//         },
//         large: {
//           height: 450,
//           width: 302,
//           url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/9e/7f/9d/eiffeltoren.jpg",
//         },
//         original: {
//           height: 1524,
//           width: 1024,
//           url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/9e/7f/9d/eiffeltoren.jpg",
//         },
//       },
//       album: "Other",
//       source: {
//         name: "Traveler",
//         localized_name: "Traveler",
//       },
//       user: {
//         username: "MichelM_Delft",
//       },
//     },
//     {
//       id: 454403030,
//       is_blessed: false,
//       caption: "© Emeric Livinec - SETE",
//       published_date: "2020-03-05T13:36:31.561Z",
//       images: {
//         thumbnail: {
//           height: 50,
//           width: 50,
//           url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
//         },
//         small: {
//           height: 150,
//           width: 150,
//           url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
//         },
//         medium: {
//           height: 187,
//           width: 250,
//           url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
//         },
//         large: {
//           height: 412,
//           width: 550,
//           url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
//         },
//         original: {
//           height: 599,
//           width: 800,
//           url: "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
//         },
//       },
//       album: "Other",
//       source: {
//         name: "Management",
//         localized_name: "Management",
//       },
//       user: {
//         username: "Management",
//       },
//     },
//     {
//       id: 454402977,
//       is_blessed: false,
//       caption: "© Emeric Livinec - SETE",
//       published_date: "2020-03-05T13:36:07.15Z",
//       images: {
//         thumbnail: {
//           height: 50,
//           width: 50,
//           url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
//         },
//         small: {
//           height: 150,
//           width: 150,
//           url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
//         },
//         medium: {
//           height: 167,
//           width: 250,
//           url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
//         },
//         large: {
//           height: 367,
//           width: 550,
//           url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
//         },
//         original: {
//           height: 853,
//           width: 1280,
//           url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
//         },
//       },
//       album: "Other",
//       source: {
//         name: "Management",
//         localized_name: "Management",
//       },
//       user: {
//         username: "Management",
//       },
//     },
//     {
//       id: 449869802,
//       is_blessed: false,
//       caption: "Tour Eiffel",
//       published_date: "2020-02-06T09:43:31.007Z",
//       images: {
//         thumbnail: {
//           height: 50,
//           width: 50,
//           url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/d0/77/ea/tour-eiffel.jpg",
//         },
//         small: {
//           height: 150,
//           width: 150,
//           url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/d0/77/ea/tour-eiffel.jpg",
//         },
//         medium: {
//           height: 167,
//           width: 250,
//           url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/d0/77/ea/tour-eiffel.jpg",
//         },
//         large: {
//           height: 367,
//           width: 550,
//           url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/d0/77/ea/tour-eiffel.jpg",
//         },
//         original: {
//           height: 800,
//           width: 1200,
//           url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/d0/77/ea/tour-eiffel.jpg",
//         },
//       },
//       album: "Other",
//       source: {
//         name: "Management",
//         localized_name: "Management",
//       },
//       user: {
//         username: "Management",
//       },
//     },
//     {
//       id: 454403032,
//       is_blessed: false,
//       caption: "© SETE",
//       published_date: "2020-03-05T13:36:32.061Z",
//       images: {
//         thumbnail: {
//           height: 50,
//           width: 50,
//           url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/15/a3/d8/c-sete.jpg",
//         },
//         medium: {
//           height: 200,
//           width: 180,
//           url: "https://media-cdn.tripadvisor.com/media/photo-i/1b/15/a3/d8/c-sete.jpg",
//         },
//         small: {
//           height: 150,
//           width: 150,
//           url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/15/a3/d8/c-sete.jpg",
//         },
//         large: {
//           height: 492,
//           width: 328,
//           url: "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/a3/d8/c-sete.jpg",
//         },
//       },
//       album: "Other",
//       source: {
//         name: "Management",
//         localized_name: "Management",
//       },
//       user: {
//         username: "Management",
//       },
//     },
//   ],
// };

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

const svgIcons = {
  star: (
    <svg
      style={{ width: "14px", height: "14px", fill: "var(--green-30)" }}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
    </svg>
  ),
  halfstar: (
    <svg style={{ width: "14px", height: "14px" }} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="var(--green-30)" />
          <stop offset="50%" stopColor="white" />
        </linearGradient>
      </defs>
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="url(#halfGradient)"
      ></path>
    </svg>
  ),
  heart: (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  ),
  map: (
    <svg style={{ width: "24px" }} viewBox="0 0 576 512">
      <path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"></path>
    </svg>
  ),
  link: (
    <svg style={{ width: "24px" }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  time: (
    <svg style={{ width: "24px" }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 4C7.03 4 3 8.03 3 13s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z"></path>
    </svg>
  ),
  travelbag: (
    <svg style={{ width: "24px" }} viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zM16 18h-1.5V9H16v9zm1-12h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.5-2.5h3V6h-3V3.5zM17 19H7V8h10v11z"></path>
    </svg>
  ),
};
export default function LocationDetailsCard() {
  return (
    <>
      <MaxLimitWrapper className="h-[700px] mt-24">
        <MaxLimitWrapper className="ml-[10px]">
          <CardTitle>{LocationDetails[0].title}</CardTitle>
          <div className="flex gap-2">
            <div className="flex flex-row gap-1 mt-2 ">
              {svgIcons.star}
              {svgIcons.star}
              {svgIcons.star}
              {svgIcons.star}
              {svgIcons.halfstar}
            </div>
            <span className="text-xs mt-1 ">{data.num_reviews} reviews</span>
            {data.groups.map((group, groupIndex) =>
              group.categories.map((category, categoryIndex) => (
                <span
                  key={`${groupIndex}-${categoryIndex}`}
                  className="text-xs mt-1"
                >
                  {category.name}
                </span>
              ))
            )}
          </div>

          <CardContent className=" flex gap-2 mt-1 ">
            <p>{LocationDetails[0].hours}</p>
            <p>Write a review</p>
          </CardContent>
        </MaxLimitWrapper>

        {/* ABOUT + IMG right */}
        <Card className="absolute top-[330px] left-[240px] shadow-lg  h-[410px] w-[294px] ">
          <MaxLimitWrapper>
            <CardHeader>About</CardHeader>
            <CardContent>
              <p>{LocationDetails[0].categories}</p>
              <p>{LocationDetails[0].about}</p>

              <div className="flex gap-2 mt-2">
                {svgIcons.time}
                <p>Dauer: {LocationDetails[0].duration}</p>
              </div>
            </CardContent>

            <CardFooter>
              <div className="icons grid grid-cols-4  gap-4  ">
                <Link href={""}>
                  <div>{svgIcons.heart}</div>
                </Link>
                <Link href={""}>
                  <div>{svgIcons.link}</div>
                </Link>
                <Link href={""}>
                  <div>{svgIcons.travelbag}</div>
                </Link>
                <div className="col-start-10">
                  <Link href={""}>
                    <div>{svgIcons.map}</div>
                  </Link>
                </div>
              </div>
            </CardFooter>
          </MaxLimitWrapper>
        </Card>
        {/* ENDE */}

        <div className="absolute top-[330px] left-[570px] w-[615px] h-[500px]  ">
          <Image
            style={{
              borderRadius: "2%",
            }}
            src={LocationDetails[0].image}
            alt="Eiffelturm"
            width={615}
            height={500}
            className="object-cover"
          />
        </div>
      </MaxLimitWrapper>

      <MaxLimitWrapper className="h-[700px] mt-14">
        {/* Map Section  */}
        <div className="grid grid-cols-4 ">
          <MaxLimitWrapper className="w-[800px] p-4">
            <h3 className="font-bold text-[16px]">The Area</h3>
            <p className="mt-3 text-[16px]">
              <a href="https://maps.google.com/?q=5 Avenue, 75007 Paris France">
                5 Avenue, 75007 Paris France
              </a>
            </p>
            <p className="font-bold text-[16px] ">Neighborhood: Gros-Caillou</p>
            <div className="text-[16px]">
              <h4 className="mt-3 font-semibold">How to get there</h4>
              <p>Champ de Mars - Tour Eiffel, 7 min walk</p>
              <p>Bir-Hakeim, 8 min walk</p>
              <h4 className="mt-3 font-semibold">Reach out directly</h4>
              <a href="https://example.com">Visit website</a> <span>|</span>{" "}
              <a href="tel:+123456789">Call</a>
              <h4 className="mt-3 font-semibold">Best nearby</h4>
              <p>Restaurants: 10,000 within 3 miles</p>
              <p>Attractions: 4,022 within 6 miles</p>
            </div>
          </MaxLimitWrapper>

          <div className="w-[367px] h-[495px] ml-[260px]">
            <Image
              src={mapData.mapImage}
              alt="Map of Eiffel Tower Area"
              width={367}
              height={495}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MaxLimitWrapper>
      {/* ENDE */}
    </>
  );
}
