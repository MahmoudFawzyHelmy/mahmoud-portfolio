import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Mahmoud Fawzy | Frontend Developer",
    template: "%s | Mahmoud Fawzy",
  },
  description: "React.js & Next.js developer — projects, resume and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
