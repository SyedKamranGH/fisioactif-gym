"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";

const VideoPlayer = ({ url = "https://youtu.be/dQw4w9WgXcQ", controls = true, loop = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-3 rounded-full bg-gray-100 px-6 py-3 transition-all duration-200 hover:bg-gray-200"
      >
        <div className="flex items-center justify-center rounded-full bg-white p-3 text-red-500 shadow-sm">
          <Play className="h-6 w-6" fill="currentColor" />
        </div>
        <span className="text-xl font-medium text-gray-600">Ver Vídeo</span>
      </button>

      {isOpen && (
        <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-opacity-70">
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 text-2xl font-bold text-white hover:text-gray-300"
            >
              ✕
            </button>

            {/* ReactPlayer */}
            <ReactPlayer
              url={url}
              playing={isOpen}
              controls={controls}
              loop={loop}
              width="100%"
              height="100%"
              className="react-player"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
