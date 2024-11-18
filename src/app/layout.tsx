"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./core/store/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>

      <html lang="en">
        <title>Cantina WEB</title>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <script src="./node_modules/preline/dist/preline.js"></script>
          {children}
        </body>
      </html>
    </Provider>
  );
}
