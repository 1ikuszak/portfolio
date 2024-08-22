import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/siteheader";
import { ibmPlexSans, aeonikFont } from "@/font/font";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-aeonik antialiased",
          ibmPlexSans.variable,
          aeonikFont.variable
        )}
      >
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
