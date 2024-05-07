import Hero from "@/components/hero/Hero";
import Layout1 from "@/components/tiles/Layout1";

export default async function Home() {
  const images = [
    {
      image: "/image1.jpeg",
      ctaText: "Book Now 1",
      ctaLink: "#",
    },
    {
      image: "/image2.jpeg",
      ctaText: "Book Now 2",
      ctaLink: "#",
    },
    {
      image: "/image3.jpeg",
      ctaText: "Book Now 3",
      ctaLink: "#",
    },
    {
      image: "/image4.jpeg",
      ctaText: "Book Now 4",
      ctaLink: "#",
    },
  ];

  return (
    <main>
      <Hero
        title="World's best hotels for 2024"
        image="/hero.jpeg"
        subtitle="See our Travelers' Choice Awards Best of the Best winners."
        ctaText="See the list"
        ctaLink="#"
        className="mt-4"
      />
      <h3>Stay somewhere award- winning</h3>
      <p>2024's Travelers' Choice Awards Best of the Best Hotels</p>
      <div className="grid grid-cols-4 gap-8 my-8">
        {images.map((item, index) => (
          <Layout1
            key={index}
            image={item.image}
            ctaText={item.ctaText}
            ctaLink={item.ctaLink}
          />
        ))}
      </div>
    </main>
  );
}
