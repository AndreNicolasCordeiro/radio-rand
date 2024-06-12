import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AudioVisualizerThreeProps {
  analyser: AnalyserNode | null;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

const AudioVisualizerThree = ({ analyser, value, onChange, min, max }: AudioVisualizerThreeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene = useRef<THREE.Scene>(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  );
  const renderer = useRef<THREE.WebGLRenderer>(
    new THREE.WebGLRenderer({ antialias: true })
  );
  const bars = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const container = containerRef.current;

    if (container && analyser) { // Verificação de nulidade adicionada aqui
      // Restante do seu código
    }
  }, [analyser]);

  // Se analyser for null, retornar algo adequado, por exemplo:
  if (!analyser) {
    return <div>Carregando...</div>;
  }

  return <div ref={containerRef} />;
};

export default AudioVisualizerThree;
