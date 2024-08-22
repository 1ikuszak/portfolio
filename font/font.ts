import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const ibmPlexSans = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--ibmPlexMono-font",
});

export const aeonikFont = localFont({
  src: "/static-fonts/Aeonik-Regular.ttf",
  display: "swap",
  variable: "--aeonik-font",
});
