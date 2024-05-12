import { useEffect, useRef } from "react";
import { Gl } from "~/gl";

export function useGlRef(id: string) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    queueMicrotask(() => {
      Gl.addFromDom(trackRef.current!, id);
    });

    return () => {
      Gl.removeFromDom(id);
    };
  }, [id]);

  return trackRef;
}
