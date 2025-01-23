// components/Card.tsx
import Image from "next/image";
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  provider: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, provider }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden relative font-[family-name:var(--font-poppins)] cursor-pointer group transition-all duration-300 ease-in-out">
      <div className="relative flex justify-center items-center h-32">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" />
      </div>
      <div className="p-4 bg-[#316DCF]">
        <h2 className="font-bold mb-2 text-md text-white group-hover:underline">
          {title}
        </h2>
        <p className="text-white text-sm tracking-wide">{provider}</p>
      </div>
    </div>
  );
};

export default Card;
