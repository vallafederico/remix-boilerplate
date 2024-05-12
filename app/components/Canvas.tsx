import { Gl } from "~/gl/";
import { useLenis } from "lenis/react";

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

  useLenis(({ scroll, direction, velocity }) => {
    Gl.scroll({ scroll, direction, velocity });
  });

  return (
    <div
      ref={canvasRef}
      className=" fixed left-0 top-0 h-screen w-screen "
    ></div>
  );
}
