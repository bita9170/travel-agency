import { Button } from "../components/ui/button";
import Register from "../components/Register";
import Reviews from "../components/Reviews";
import { searchAllLocations } from "../controllers/tripadvisorController";

export default async function Home() {
  const data = await searchAllLocations("Berlin", "en");

  // console.log(data);
  return (
    <main>
      <h1 className="text-3xl border border-[rgb(0,0,0)] font-bold underline">
        Hello world!
      </h1>
      <Button>Click me</Button>
      <Register />
      <div className="reviews">
        <h1>Review Formular</h1>
        <Reviews />
      </div>
    </main>
  );
}
