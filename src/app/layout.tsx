import type { Metadata } from "next";
import localFont from "next/font/local";
import LightBackground from "../modules/layout/components/light-background";
import { clx } from "../utils/clx";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/Inter-Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/inter/Inter-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/inter/Inter-Thin.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/inter/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/inter/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/inter/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/inter/Inter-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/inter/Inter-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/inter/Inter-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guilletetienne.com"),
  title: "Etienne Guillet - Frontend Developer",
  description: "Frontend Developer",
  openGraph: {
    images: ["images/metadata/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body
        className={clx(
          "relative bg-slate-900 min-h-screen selection:bg-teal-300 selection:text-teal-900 leading-relaxed  font-sans antialiased",
          inter.className
        )}
      >
        <LightBackground />
        <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-0 lg:px-24">
          {children}
        </div>
      </body>
    </html>
  );
}
