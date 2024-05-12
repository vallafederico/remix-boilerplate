import Tempus from "@darkroom.engineering/tempus";
import { useEffect } from "react";

export function useFrame(callback, priority = 0) {
  useEffect(() => {
    if (callback) {
      Tempus.add(callback, priority);

      return () => Tempus.remove(callback);
    }
  }, [callback, priority]);
}
