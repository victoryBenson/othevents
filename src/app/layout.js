import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footerview from "@/components/Footerview";
import Script from "next/script";


export const metadata = {
  title: "OTH events",
  description: "Event book App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="beforeInteractive"
      /> */}
         {/* <script src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
      <body
        className={`bg-[#FAF9F6]`}
      >
        <Header />
          {children}
        <Footerview/>
      </body>
    </html>
  );
}
