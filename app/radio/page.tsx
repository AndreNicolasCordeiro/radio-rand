"use client";

import React, { useEffect, useRef, useState, MutableRefObject } from "react";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Volume } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AudioVisualizer: React.FC<{
    barColor?: string;
    highlightColor?: string;
  }> = () => {
    const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [dataArray, setDataArray] = useState<Uint8Array | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(false);
    const [volume, setVolume] = useState(50);
    const audioContextRef: MutableRefObject<AudioContext | null> = useRef(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
  
    const handleMuteUnmute = () => {
      if (audioRef.current) {
        const newIsMuted = !isMuted; 
        setIsMuted(newIsMuted);
        audioRef.current.volume = newIsMuted ? 0 : volume / 100;
      }
    };
  
    const handlePlayPause = async () => {
      console.log("handlePlayPause called");
      if (audioRef.current) {
        if (isPlaying) {
          console.log("Pausing audio");
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          setLoading(true);
          try {
            if (!audioContextRef.current) {
              console.log("Creating new AudioContext");
              const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
              const audioContext = new AudioContext();
              audioContextRef.current = audioContext;
  
              const source = audioContext.createMediaElementSource(audioRef.current);
              const analyserNode = audioContext.createAnalyser();
              source.connect(analyserNode);
              analyserNode.connect(audioContext.destination);
              analyserNode.fftSize = 256;
              const bufferLength = analyserNode.frequencyBinCount;
              const dataArray = new Uint8Array(bufferLength);
  
              setAnalyser(analyserNode);
              setDataArray(dataArray);
            }
  
            audioRef.current.src = "https://stream.zeno.fm/zaco5mfazbjvv";
            audioRef.current.crossOrigin = "anonymous";
            console.log("Attempting to play audio");
            await audioRef.current.play();
            setIsPlaying(true);
            console.log("Audio is playing");
          } catch (error) {
            console.error("Error setting up audio context or playing audio:", error);
          } finally {
            setLoading(false);
          }
        }
      } else {
        console.log("audioRef.current does not exist");
      }
    };
  
    const handleVolumeChange = (value: number) => {
      if (audioRef.current) {
        audioRef.current.volume = value / 100;
        setVolume(value);
      }
    };
  
    const updateProgressBar = () => {
      if (analyser && dataArray && progressBarRef.current) {
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((acc, cur) => acc + cur, 0) / dataArray.length;
        const percentage = (average / 255) * 100;
        progressBarRef.current.style.transform = `scaleX(${percentage / 100})`;
      }
      requestAnimationFrame(updateProgressBar);
    };
    
    useEffect(() => {
      updateProgressBar();
    }, [analyser, dataArray]);
    
  
    useEffect(() => {
      return () => {
        console.log("Cleaning up AudioContext");
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-primary lg:bg-[#2f4f52] text-white w-full">
        
        <div className="flex-col content-center h-screen lg:h-[28rem] w-full max-w-md p-6 bg-primary rounded-lg lg:shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Ao vivo</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={handlePlayPause}
              >
                {loading ? (
                  <Loader2Icon className="w-5 h-5 animate-spin" />
                ) : isPlaying ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/neusadomit.jpg"
              alt="Album Cover"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-40 h-40 rounded-full object-cover mb-4 ${isPlaying ? "animate-spin-slow" : ""}`}
            />
            <h3 className="text-xl font-bold mb-2">RAND</h3>
            <p className="text-gray-400">Rádio ativa</p>
          </div>
          <div className="flex items-center justify-between mb-6 w-full">
            <span className="text-gray-400">0:00</span>
            <div ref={progressBarRef} className="progress-bar" />
            <span className="text-red-800">• ao vivo</span>
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={handlePlayPause}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              {loading ? (
                <Loader2Icon className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <PauseIcon className="w-5 h-5" />
              ) : (
                <PlayIcon className="w-5 h-5" />
              )}
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={handleMuteUnmute}
              >
                {isMuted ? (
                  <Volume className="w-5 h-5" />
                ) : (
                  <Volume2Icon className="w-5 h-5" />
                )}
              </Button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="h-3 bg-gray-600 rounded-md"
              />
            </div>
          </div>
          <audio ref={audioRef} style={{ display: 'none' }} />
        </div>
      </div>
    );
  };
  
  export default function Component() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <AudioVisualizer barColor="blue" highlightColor="red" />
      </div>
    );
  }

function FastForwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PauseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

function SkipForwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" x2="19" y1="5" y2="19" />
    </svg>
  );
}

function Volume2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
