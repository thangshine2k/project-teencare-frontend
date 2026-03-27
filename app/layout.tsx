"use client";
import LayoutClient from "./LayoutClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#ffffff" }}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
