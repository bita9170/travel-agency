import React from "react";
import { Card } from "@/components/ui/card";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Image from "next/image";

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
  mapImage: "/public/map.png",
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
  num_reviews: "142314",
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

const photos = {
  data: [
    {
      id: 446594973,
      is_blessed: false,
      caption: "Eiffeltoren",
      published_date: "2020-01-16T19:17:25.925Z",
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/9e/7f/9d/eiffeltoren.jpg",
        },
        medium: {
          height: 200,
          width: 180,
          url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/9e/7f/9d/eiffeltoren.jpg",
        },
        small: {
          height: 150,
          width: 150,
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/9e/7f/9d/eiffeltoren.jpg",
        },
        large: {
          height: 450,
          width: 302,
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/9e/7f/9d/eiffeltoren.jpg",
        },
        original: {
          height: 1524,
          width: 1024,
          url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/9e/7f/9d/eiffeltoren.jpg",
        },
      },
      album: "Other",
      source: {
        name: "Traveler",
        localized_name: "Traveler",
      },
      user: {
        username: "MichelM_Delft",
      },
    },
    {
      id: 454403030,
      is_blessed: false,
      caption: "© Emeric Livinec - SETE",
      published_date: "2020-03-05T13:36:31.561Z",
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
        },
        small: {
          height: 150,
          width: 150,
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
        },
        medium: {
          height: 187,
          width: 250,
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
        },
        large: {
          height: 412,
          width: 550,
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
        },
        original: {
          height: 599,
          width: 800,
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/a3/d6/c-emeric-livinec-sete.jpg",
        },
      },
      album: "Other",
      source: {
        name: "Management",
        localized_name: "Management",
      },
      user: {
        username: "Management",
      },
    },
    {
      id: 454402977,
      is_blessed: false,
      caption: "© Emeric Livinec - SETE",
      published_date: "2020-03-05T13:36:07.15Z",
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
        },
        small: {
          height: 150,
          width: 150,
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
        },
        medium: {
          height: 167,
          width: 250,
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
        },
        large: {
          height: 367,
          width: 550,
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
        },
        original: {
          height: 853,
          width: 1280,
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/15/a3/a1/c-emeric-livinec-sete.jpg",
        },
      },
      album: "Other",
      source: {
        name: "Management",
        localized_name: "Management",
      },
      user: {
        username: "Management",
      },
    },
    {
      id: 449869802,
      is_blessed: false,
      caption: "Tour Eiffel",
      published_date: "2020-02-06T09:43:31.007Z",
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/d0/77/ea/tour-eiffel.jpg",
        },
        small: {
          height: 150,
          width: 150,
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/d0/77/ea/tour-eiffel.jpg",
        },
        medium: {
          height: 167,
          width: 250,
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/d0/77/ea/tour-eiffel.jpg",
        },
        large: {
          height: 367,
          width: 550,
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/d0/77/ea/tour-eiffel.jpg",
        },
        original: {
          height: 800,
          width: 1200,
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/d0/77/ea/tour-eiffel.jpg",
        },
      },
      album: "Other",
      source: {
        name: "Management",
        localized_name: "Management",
      },
      user: {
        username: "Management",
      },
    },
    {
      id: 454403032,
      is_blessed: false,
      caption: "© SETE",
      published_date: "2020-03-05T13:36:32.061Z",
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/15/a3/d8/c-sete.jpg",
        },
        medium: {
          height: 200,
          width: 180,
          url: "https://media-cdn.tripadvisor.com/media/photo-i/1b/15/a3/d8/c-sete.jpg",
        },
        small: {
          height: 150,
          width: 150,
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/15/a3/d8/c-sete.jpg",
        },
        large: {
          height: 492,
          width: 328,
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/a3/d8/c-sete.jpg",
        },
      },
      album: "Other",
      source: {
        name: "Management",
        localized_name: "Management",
      },
      user: {
        username: "Management",
      },
    },
  ],
};
export function MapDetailsCard() {
  return (
    <Card className="w-[350px]">
      <MaxLimitWrapper>
        <h3>The Area</h3>
        <p>{mapData.address}</p>
        <p>Neighborhood: {mapData.neighborhood}</p>
        <h4>How to get there</h4>
        {mapData.transport.map((item, index) => (
          <p key={index}>
            {item.name}, {item.walkTime}
          </p>
        ))}
        <h4>Reach out directly</h4>
        <a href={mapData.contact.websiteURL}>Visit website</a>
        <p>Call: {mapData.contact.phone}</p>
        <h4>Best nearby</h4>
        <p>Restaurants: {mapData.nearby.restaurants}</p>
        <p>Attractions: {mapData.nearby.attractions}</p>
        <Image
          src={mapData.mapImage}
          alt="Map of Eiffel Tower Area"
          width={300}
          height={300}
        />
      </MaxLimitWrapper>
    </Card>
  );
}
