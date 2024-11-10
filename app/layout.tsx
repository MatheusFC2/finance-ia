import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
  weight: "400",
});

export const meta: Metadata = {
  title: "Finance AI",
  description: "A digital financial assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} ${mulish.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
