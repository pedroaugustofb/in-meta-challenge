import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InMeta Challenge",
  description: "This project is a challenge for InMeta company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
