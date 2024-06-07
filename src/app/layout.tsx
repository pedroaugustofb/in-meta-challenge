import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "../contexts/auth.context";

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
      <AuthProvider>
        <body className="bg-gray-50">
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
