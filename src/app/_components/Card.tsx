import React, { ReactNode } from "react";
import LoadingImage from "./ImageLoader";

interface CardProps {
  imageUrl: string;
  title: string;
  descriptionComponent?: ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  descriptionComponent,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-xl overflow-hidden relative font-[family-name:var(--font-poppins)] group transition-all duration-300 ease-in-out ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="relative flex justify-center items-center h-32">
        <LoadingImage src={imageUrl} alt={title} />
      </div>
      <div className="px-4 py-1 bg-[#316DCF]">
        <h2 className="font-bold mb-2 text-md text-white group-hover:underline capitalize text-center">
          {title}
        </h2>
        {descriptionComponent ? descriptionComponent : null}
      </div>
    </div>
  );
};

export default Card;
