import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Heartbeat Away",
  description: "Heartbeat Away",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
