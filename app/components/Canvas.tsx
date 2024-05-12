import { Gl } from "~/gl/";

import { useRef } from "react";

import {
  useDebounceCallback,
  useResizeObserver,
  useIsomorphicLayoutEffect,
} from "usehooks-ts";

export function Canvas() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    Gl.init(canvasRef.current!);
  }, []);

  useResizeObserver({
    ref: canvasRef,
    onResize: useDebounceCallback((data) => Gl.resize(data), 100),
  });

  return (
    <div
      ref={canvasRef}
      className=" fixed left-0 top-0 h-screen w-screen "
    ></div>
  );
}
