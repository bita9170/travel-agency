import type { Metadata } from "next";
import "@/scss/globals.scss";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
