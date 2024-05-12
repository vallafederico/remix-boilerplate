import { ReactLenis, useLenis } from "lenis/react";
import { Gl } from "~/gl";
// import Tempus from "@darkroom.engineering/tempus";
// import { useFrame } from "~/hooks/useFrame";

export function Scroll({ children }: { children: React.ReactNode }) {
  useLenis(({ scroll, direction, velocity }) => {
    Gl.scroll({ scroll, direction, velocity });
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
