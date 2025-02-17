import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footerview from "@/components/Footerview";


export const metadata = {
  title: "OTH events",
  description: "Event book App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-lightgray/5 `}
      >
        <Header />
          {children}
        <Footerview/>
      </body>
    </html>
  );
}
