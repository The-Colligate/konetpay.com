"use client";

import { ThemeProvider } from "next-themes";
import "./globals.scss";
import { Navbar } from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem
          enableColorScheme
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
