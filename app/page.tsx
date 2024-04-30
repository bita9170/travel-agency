import { Button } from "@/components/ui/button";
import Register from "@/components/Register";

import Logo from "@/components/elements/Logo";
import Avatar from "@/components/elements/Avatar";

export default async function Home() {
 
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
