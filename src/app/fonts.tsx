import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";

export const poor_things = localFont({
  src: "./fonts/POOR_THINGS.ttf",
});

export const nonbit = localFont({
  src: "./fonts/213chan_nonbit-Regular.otf",
});

export const absent_in_the_rain = localFont({
  src: "./fonts/AbsentInTheRain.otf",
});

export const public_sans = Public_Sans({
  subsets: ["latin"],
});
