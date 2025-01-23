"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  interface Pokemon {
    name: string;
    url: string;
  }

  interface PokeList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
  }

  const [pokeList, setPokeList] = useState<PokeList | null>(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=32&offset=0")
      .then((response) => {
        setPokeList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 pt-[75px] sm:p-20 font-[family-name:var(--font-poppins)] bg-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-500">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-x-4 gap-y-8">
              {pokeList?.results?.map((val) => (
                <Card
                  imageUrl={`https://img.pokemondb.net/artwork/${val.name}.jpg`}
                  title={val.name}
                  key={val.url}
                  onClick={
                    isAuthenticated
                      ? () => router.push(`/details/${val.name}`)
                      : undefined
                  }
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                disabled={!pokeList?.previous}
                onClick={() => {
                  if (pokeList?.previous) {
                    axios.get(pokeList.previous).then((response) => {
                      setPokeList(response.data);
                    });
                  }
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                disabled={!pokeList?.next}
                onClick={() => {
                  if (pokeList?.next) {
                    axios.get(pokeList.next).then((response) => {
                      setPokeList(response.data);
                    });
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
