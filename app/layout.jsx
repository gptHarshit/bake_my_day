import localFont from "next/font/local";
import "./globals.css";

// Fonts project ke andar hi hain (app/fonts) — build ke time kuch download nahi hota.
const display = localFont({
  src: [
    { path: "./fonts/texgyrebonum-regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/texgyrebonum-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/Inter-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Inter-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Inter-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "BakeMyDay | Cake menu & price list",
  description:
    "BakeMyDay menu with prices: dry cakes, regular cream cakes, Indian sweet flavour cakes, chocolate tacos, tiramisu and bento cakes.",
};

export const viewport = {
  themeColor: "#4a2b1a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
