import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import { Separator } from "@/components/ui/separator";
import {
  MyFavoritesIcon,
  MyPlanIcon,
  MyPlacesIcon,
  MyReviewsIcon,
  NewPostIcon,
  ShowReviewsIcon,
  SocialNetworksIcon,
  PagesLayoutIcon,
  EditProfileIcon,
} from "./icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | BiHamTha Travel Agency",
  description: "Dashboard | BiHamTha Travel Agency",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }
  return (
    <>
      <Header />
      <Separator />
      <MaxLimitWrapper className="py-6">
        <div className="dashboard-section flex gap-4">
          <div className="flex flex-col side-menu">
            <h5 className="font-bold">User Menu</h5>
            <ul>
              <li>
                <EditProfileIcon />
                Edit Profile
              </li>

              <li>
                <MyPlanIcon />
                My Plan
              </li>

              <li>
                <MyFavoritesIcon />
                My Favorites
              </li>

              <li>
                <MyPlacesIcon />
                My Places
              </li>

              <li>
                <MyReviewsIcon />
                My Reviews
              </li>
            </ul>

            <div className="mt-12">
              <h3>Admin Menu</h3>
              <ul>
                <li>
                  <Link href="/dashboard/posts" className="flex space-x-2">
                    <NewPostIcon />
                    Posts
                  </Link>
                </li>

                <li>
                  <ShowReviewsIcon />
                  Show Reviews
                </li>

                <li>
                  <SocialNetworksIcon />
                  Socila Networks
                </li>

                <li>
                  <PagesLayoutIcon />
                  Pages Layout
                </li>
              </ul>
            </div>
          </div>

          <div className="main w-full flex-1">{children}</div>
        </div>
      </MaxLimitWrapper>
      <Footer footerTop={false} />
    </>
  );
}
