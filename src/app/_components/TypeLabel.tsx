import React from "react";

interface TypeLabelProps {
  type: string;
}

const typeColors: Record<string, string> = {
  grass: "bg-green-500 text-white",
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-500 text-black",
  poison: "bg-purple-500 text-white",
  flying: "bg-blue-300 text-black",
  bug: "bg-green-300 text-black",
  ground: "bg-brown-500 text-white",
  rock: "bg-gray-500 text-white",
  dragon: "bg-indigo-500 text-white",
  steel: "bg-gray-400 text-black",
  fairy: "bg-pink-500 text-white",
  ice: "bg-cyan-400 text-black",
  normal: "bg-gray-200 text-black",
  fighting: "bg-red-700 text-white",
  psychic: "bg-pink-300 text-black",
  ghost: "bg-purple-700 text-white",
  dark: "bg-gray-800 text-white",
};

const TypeLabel: React.FC<TypeLabelProps> = ({ type }) => {
  const colorClass = typeColors[type] || "bg-gray-300 text-black";

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colorClass} mr-2 my-1`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
    </span>
  );
};

export default TypeLabel;
