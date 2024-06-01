import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "BiHamTha Travel Agency",
  description: "BiHamTha Travel Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
