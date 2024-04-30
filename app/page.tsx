import { Button } from "@/components/ui/button";
import Register from "@/components/Register";
import {
  searchAllLocations,
  getLocationReviews,
  searchHotels,
} from "@/controllers/tripadvisorController";
import Logo from "@/components/elements/Logo";
import Avatar from "@/components/elements/Avatar";

export default async function Home() {
  const data = await searchHotels("Hilton");

  console.log(data);
  return (
    <main>
      {/* <h1 className="text-3xl border border-[rgb(0,0,0)] font-bold underline">
        Hello world!
      </h1>
      <Button>Click me</Button>
      <Register /> */}
      <Logo />
      <Avatar src="/avatar.jpeg" alt="avatar" fallBack="BS" />
    </main>
  );
}
