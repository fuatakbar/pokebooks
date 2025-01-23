import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pokemon - Pasar Trainer",
  description: "Test App for Pasar Trainer to show Pokeapi data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased global-layout bg-white`}
        >
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
