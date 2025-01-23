"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/firebase/initFirebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Kamu telah logout.");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 block">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo-pokeapi.png"
              alt="PokeAPI"
              className="mr-2"
              width={100}
              height={100}
            />
          </Link>
        </div>
        {/* <div className="hidden md:flex text-gray-500">
          <span className="tracking-wide">
            Akses Informasi Pokemon Kesukaanmu
          </span>
        </div> */}
        <div>
          {user ? (
            <div className="flex items-center">
              <span className="text-gray-500 inline-block mr-3 tracking-wide">
                Halo, {user.email}
              </span>
              <button
                onClick={handleLogout}
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <span className="text-gray-500 inline-block mr-3 tracking-wide">
                Ingin melihat detail? &rarr;
              </span>
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Masuk
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
