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
  NewPostIcon,
  DashboardIcon,
} from "./icons";
import Link from "next/link";
import { DialogSaveLocations as Dialog } from "@/components/elements/dialogs/DialogSaveLocations";

export const metadata: Metadata = {
  title: "Dashboard | BiHamTha Travel Agency",
  description: "Dashboard | BiHamTha Travel Agency",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  const adminEmails = process.env.ADMIN_EMAIL?.split(",");

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Separator />
      <MaxLimitWrapper className="py-6 flex-1 w-full">
        <div className="dashboard-section flex gap-4">
          <div className="flex flex-col side-menu">
            <h3>User Menu</h3>
            <ul>
              <Link href="/dashboard">
                <li>
                  <DashboardIcon />
                  Dashboard
                </li>
              </Link>
              <Dialog userId={user.id} type="plans">
                <li>
                  <MyPlanIcon />
                  My Plan
                </li>
              </Dialog>
              <Dialog userId={user.id} type="favorite">
                <li>
                  <MyFavoritesIcon />
                  My Favorites
                </li>
              </Dialog>
              <Dialog userId={user.id} type="place">
                <li>
                  <MyPlacesIcon />
                  My Places
                </li>
              </Dialog>

              {/* <li>
                <MyReviewsIcon />
                My Reviews
              </li> */}
            </ul>
            {user.email && adminEmails && adminEmails.includes(user.email) && (
              <div className="mt-12">
                <h3>Admin Menu</h3>
                <ul>
                  <li>
                    <Link href="/dashboard/posts" className="flex space-x-2">
                      <NewPostIcon />
                      Posts
                    </Link>
                  </li>

                  {/* <li>
                    <ShowReviewsIcon />
                    Show Reviews
                  </li> */}

                  {/* <li>
                    <SocialNetworksIcon />
                    <Link href="/dashboard/networks">Social Networks</Link>
                  </li> */}

                  {/* <li>
                    <PagesLayoutIcon />
                    Pages Layout
                  </li> */}
                </ul>
              </div>
            )}
          </div>

          <div className="main w-full flex-1">{children}</div>
        </div>
      </MaxLimitWrapper>
      <Footer footerTop={false} />
    </main>
  );
}
