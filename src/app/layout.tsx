import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PokeBooks - Find Your Pokemon!",
  description: "Find Your Pokemon Here!",
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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
