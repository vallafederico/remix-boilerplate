import { ReactLenis } from "lenis/react";
import { useRef, useEffect } from "react";
import { Gl } from "~/gl";

import { useFrame } from "~/hooks/useFrame";

export function Scroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ReactLenis | null>(null);

  useEffect(() => {
    Gl.scrollRef = lenisRef.current.lenis;
  }, [lenisRef.current?.lenis]);

  useFrame((time: number) => {
    lenisRef.current?.lenis?.raf(time);
  });

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      {children}
    </ReactLenis>
  );
}
