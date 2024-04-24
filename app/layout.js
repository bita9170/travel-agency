import "./globals.scss";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Travel Agency",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
