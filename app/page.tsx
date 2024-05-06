import Register from "../components/Register";
import Reviews from "../components/Reviews";
import { searchAllLocations } from "../controllers/tripadvisorController";
// import Footer from "../components/footer/Footer";

export default async function Home() {
  const data = await searchAllLocations("Berlin", "en");

  // console.log(data);
  return (
    <main>
      <Register />
      <div className="reviews">
        <h1>Review Formular</h1>
        <Reviews />

        {/* <Footer />  */}
      </div>
    </main>
  );
}
