import "./globals.css";
import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Nunito_Sans } from "next/font/google";
import { MainHeader } from "./_components";

config.autoAddCss = false;

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Countries search",
  description: "Super search countries app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <MainHeader />
        <main className="mx-auto max-w-7xl px-4 mt-16">{children}</main>
      </body>
    </html>
  );
}
