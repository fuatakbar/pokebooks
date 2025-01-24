"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { pokeNumbering } from "@/helpers";
import Stats from "@/components/Stats";
import Image from "next/image";
import TypeLabel from "@/components/TypeLabel";
import AudioPlayer from "@/components/AudioPlayer";

interface PokeStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokeType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokeAbility {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface PokeCries {
  latest?: string;
  legacy?: string;
}

type PokemonDetails = {
  id: number;
  name: string;
  stats: PokeStat[];
  types: PokeType[];
  base_experience: number;
  is_default: boolean;
  weight: number;
  height: number;
  abilities: PokeAbility[];
  cries?: PokeCries;
};

const DetailPage = () => {
  const params = useParams();
  const { name } = params;
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Pokémon details:", error);
      });
  }, [name]);

  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-poppins)] bg-white pt-[65px]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-500">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <h3 className="text-gray-700 font-bold capitalize text-xl">{`${pokeNumbering(
                  details?.id ? details.id : 0
                )} - ${details?.name}`}</h3>
                <Image
                  src={`https://img.pokemondb.net/artwork/${details?.name}.jpg`}
                  alt={`${details?.name}`}
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
              <div className="p-4 text-gray-700">
                <Stats stats={details?.stats || []} />
              </div>
              <div className="p-4 text-gray-700 grid grid:cols-1 md:grid-cols-1 xl:grid-cols-1 gap-y-6 gap-x-4">
                <div>
                  <h1 className="text-2xl font-bold mb-4">Info / Stats</h1>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-400">
                        <td className="py-2 px-0 md:px-4 font-semibold">
                          Types
                        </td>
                        <td className="py-2 px-0 md:px-4">
                          {details &&
                            details.types?.map((val) => {
                              return (
                                <TypeLabel
                                  key={val.type?.name}
                                  type={val.type?.name}
                                />
                              );
                            })}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="py-2 px-0 md:px-4 font-semibold">
                          Is Default
                        </td>
                        <td className="py-2 px-0 md:px-4 capitalize">
                          {details?.is_default?.toString()}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="py-2 px-0 md:px-4 font-semibold">
                          Base Experience
                        </td>
                        <td className="py-2 px-0 md:px-4">
                          {details?.base_experience}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="py-2 px-0 md:px-4 font-semibold">
                          Width
                        </td>
                        <td className="py-2 px-0 md:px-4">
                          {details?.weight} kg
                        </td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="py-2 px-0 md:px-4 font-semibold">
                          Height
                        </td>
                        <td className="py-2 px-0 md:px-4">
                          {details?.height} m
                        </td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="py-2 px-0 md:px-4 font-semibold">
                          Abilities
                        </td>
                        <td className="py-2 px-0 md:px-4">
                          <ol className="capitalize">
                            {details?.abilities?.map((val) => {
                              return (
                                <li key={val.ability.name}>
                                  <strong>{`${val?.ability?.name} `}</strong>
                                  <span className="text-sm">{`(${
                                    val?.is_hidden ? "Hidden | " : ""
                                  }${val?.slot} slots)`}</span>
                                </li>
                              );
                            })}
                          </ol>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className=" text-gray-700">
                  <h1 className="text-2xl font-bold mb-2">Cries</h1>
                  {details?.cries?.latest && (
                    <div className="my-2">
                      <AudioPlayer src={details?.cries?.latest} />
                    </div>
                  )}
                  {details?.cries?.legacy && (
                    <div className="my-2">
                      <AudioPlayer src={details?.cries?.legacy} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
