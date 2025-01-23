"use client";

import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
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
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-poppins)] bg-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-500">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4">
              {pokeList?.results?.map((val) => (
                <Card
                  imageUrl={`https://img.pokemondb.net/artwork/${val.name}.jpg`}
                  title={val.name}
                  key={val.url}
                  onClick={() => router.push(`/details/${val.name}`)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
