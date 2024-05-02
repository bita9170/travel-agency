import { Button } from "@/components/ui/button";
import Register from "@/components/Register";
import Logo from "@/components/elements/Logo";
import Avatar from "@/components/elements/Avatar";
import Hero from "@/components/hero/Hero";

export default async function Home() {
  return (
    <main>
      {/* <Button>Click me</Button> */}
      {/* <Register /> */}
      {/* <Logo />
      <Avatar src="/avatar.jpeg" alt="avatar" fallBack="BS" /> */}
      <Hero
        title="World's best hotels for 2024"
        image="/hero.jpeg"
        subtitle="See our Travelers' Choice Awards Best of the Best winners."
        ctaText="See the list"
        ctaLink="#"
        className="mt-4"
      />
    </main>
  );
}
