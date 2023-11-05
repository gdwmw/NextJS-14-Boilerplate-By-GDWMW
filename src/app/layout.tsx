import { NextThemesProvider } from "@/libs/next-themes";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { FC, ReactElement, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NextJS 14 Boilerplate By GDWMW",
  description: "NextJS 14 Boilerplate By GDWMW",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
