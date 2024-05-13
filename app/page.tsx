import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Hero from "@/components/hero/Hero";
import Tab from "@/components/tabsection/Tab";
import Layout1 from "@/components/tiles/Layout1";
import Layout2 from "@/components/tiles/Layout2";
import { getLocationDetails } from "@/controllers/tripadvisorController";
import { LocationDetails } from "@/lib/class/location";

export default async function Home() {
  const locationDetails: LocationDetails[] = await getLocationDetails([
    188151, 188757, 188679, 188709,
  ]);

  const images = [
    {
      image: "/image1.jpeg",
      ctaText: "Top Hotels",
      ctaLink: "#",
    },
    {
      image: "/image2.jpeg",
      ctaText: "All-Inclusive Hotels",
      ctaLink: "#",
    },
    {
      image: "/image3.jpeg",
      ctaText: "Family-Friendly Hotels",
      ctaLink: "#",
    },
    {
      image: "/image4.jpeg",
      ctaText: "Luxury Hotels",
      ctaLink: "#",
    },
  ];

  const data = [
    {
      title: "Spring Destinations",
      content: <SpringContent />,
    },
    {
      title: "Summer Destinations",
      content: <SommerContent />,
    },
  ];

  return (
    <>
      <MaxLimitWrapper>
        <Hero
          title="World's best hotels for 2024"
          image="/hero.jpeg"
          subtitle="See our Travelers' Choice Awards Best of the Best winners."
          ctaText="See the list"
          ctaLink="#"
          className="mt-4"
        />
      </MaxLimitWrapper>

      <MaxLimitWrapper>
        <section className="py-10 mt-4 px-2 md:px-0">
          <h3>Stay somewhere award- winning</h3>
          <p>2024's Travelers' Choice Awards Best of the Best Hotels</p>
          <div className="grid md:grid-cols-4 gap-8 my-4">
            {images.map((item, index) => (
              <Layout1
                key={index}
                image={item.image}
                ctaText={item.ctaText}
                ctaLink={item.ctaLink}
              />
            ))}
          </div>
        </section>
      </MaxLimitWrapper>

      <MaxLimitWrapper>
        <section className="py-10 mt-4 px-2 md:px-0">
          <h3>You might like these</h3>
          <p>More things to do in Paris</p>
          <div className="grid md:grid-cols-4 gap-8 my-4">
            {locationDetails.map(async (location) => (
              <Layout2
                key={location.getLocationId()}
                image={(await location.getPhotos())[0].getLarge().url}
                ctaText={location.getName()}
                rating={location.getRatingImageUrl()}
                ctaLink="#"
              />
            ))}
          </div>
        </section>
      </MaxLimitWrapper>
      <MaxLimitWrapper>
        <Tab data={data} defaultValue="spring" />
      </MaxLimitWrapper>
    </>
  );
}

export const SpringContent = () => {
  return (
    <div className="w-full">
      <ul className="text-xs leading-4">
        <li>Nashville 2</li>
        <li>Charleston 2</li>
        <li>New Orleans</li>
        <li>Washington DC</li>
      </ul>
    </div>
  );
};

export const SommerContent = () => {
  return (
    <div className="flex">
      <div className="grid  md:grid-cols-4 w-full ">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <ul className="text-xs leading-4" key={i}>
              <li>Nashville 1</li>
              <li>Charleston</li>
              <li>New Orleans</li>
              <li>Washington DC</li>
            </ul>
          ))}
      </div>
    </div>
  );
};
