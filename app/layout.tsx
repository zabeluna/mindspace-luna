import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const jua = Jua({
  variable: "--font-jua",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "mindspace",
  description: "A place for you to listen to relaxing sounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background",
          jua.className,
          "bg-green-950 text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
