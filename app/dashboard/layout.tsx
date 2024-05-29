import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import { Separator } from "@/components/ui/separator";
import MenuList from "@/components/dashboard/MenuList";

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
      <MaxLimitWrapper className="py-10">
        <div className="dashboard-section flex gap-10">
          <MenuList />
          <div className="main w-full flex-1">{children}</div>
        </div>
      </MaxLimitWrapper>
      <Footer footerTop={false} />
    </>
  );
}
