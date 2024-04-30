import { searchAllLocations } from "@/controllers/tripadvisorController";
import Footer from "../components/footer/Footer";

export default async function Home() {
  const data = await searchAllLocations("Berlin", "en");

  // console.log(data);
  return (
    <div>
      <Footer />
    </div>
  );
}
