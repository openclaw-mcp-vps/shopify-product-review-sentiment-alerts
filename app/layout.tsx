import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewSentinel – Alert When Shopify Reviews Turn Negative",
  description: "Monitor product review sentiment in real-time. Get instant email/SMS alerts when negative trends are detected on your Shopify store."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e9784111-020b-4560-909f-1f4171c16490"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
