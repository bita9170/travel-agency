import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Hero from "@/components/hero/Hero";
import Test from "@/components/hero/Test";
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
      <div className="bg-[#fff7e1]">
        <MaxLimitWrapper className="px-2">
          <Test />
        </MaxLimitWrapper>
      </div>
    </>
  );
}
