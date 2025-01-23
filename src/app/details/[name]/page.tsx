"use client";

import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";

const NamePage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const trainingData = [
    { label: "EV yield", value: "1 Sp. Atk" },
    { label: "Catch rate", value: "45 (5.9% with PokéBall, full HP)" },
    { label: "Base Friendship", value: "50 (normal)" },
    { label: "Base Exp.", value: "64" },
    { label: "Growth Rate", value: "Medium Slow" },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-poppins)] bg-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-500">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <p className="text-gray-600">{name}</p>
              <div className="p-4 text-gray-600">
                <h1 className="text-2xl font-bold mb-4">Training</h1>
                <table className="w-full border-collapse">
                  <tbody>
                    {trainingData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-400">
                        <td className="py-2 px-4 font-semibold">
                          {item.label}
                        </td>
                        <td className="py-2 px-4">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NamePage;
