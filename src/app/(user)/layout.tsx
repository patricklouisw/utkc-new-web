import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Affiliations from "@/components/Affiliations";
import MailingList from "@/components/Home/MailingList";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UTKC",
  description: "University of Toronto Karate Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <MailingList />

        <Affiliations />
        <Footer />
      </body>
    </html>
  );
}
