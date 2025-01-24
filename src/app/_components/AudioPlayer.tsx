import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <audio ref={audioRef} src={src} controls />
    </div>
  );
};

export default AudioPlayer;
