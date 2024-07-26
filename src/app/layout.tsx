import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clx } from "../../utils/clx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Etienne Guillet",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clx(
          "bg-slate-900 leading-relaxed px-6 py-12 font-sans md:px-12 md:py-20 lg:py-0 lg:px-24 antialiased",
          inter.className
        )}
      >
        <div
          style={{
            background:
              "radial-gradient(600px at 976px 1694.67px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
