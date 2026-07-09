import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Sakib Al Hasan",
  description: "Flutter Developer | Full Stack Developer | UI/UX Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
