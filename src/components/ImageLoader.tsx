"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LoadingImageProps {
  src: string;
  alt: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="loader border-4 border-t-4 border-blue-500 rounded-full w-10 h-10 animate-spin">
            <Image
              src="/icons/icon-load.svg"
              alt="Load"
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoadingComplete={() => setLoading(false)}
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default LoadingImage;
