import { Button } from "@/components/ui/button";
import Register from "@/components/Register";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
      <Register />
    </main>
  );
}
