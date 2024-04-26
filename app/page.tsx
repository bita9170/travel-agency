import { Button } from "@/components/ui/button";
import Register from "@/components/Register";
import { searchAllLocations } from "@/controllers/tripadvisorController";

export default async function Home() {
  const data = await searchAllLocations("Berlin", "en");

  console.log(data);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
      <Register />
    </main>
  );
}
