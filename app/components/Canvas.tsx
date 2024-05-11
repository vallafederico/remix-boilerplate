import { Gl } from "~/gl/";

import { useRef, useLayoutEffect } from "react";

export function Canvas() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    Gl.init(canvasRef.current!);
  }, []);

  return (
    <div
      ref={canvasRef}
      className=" fixed left-0 top-0 h-screen w-screen "
    ></div>
  );
}
