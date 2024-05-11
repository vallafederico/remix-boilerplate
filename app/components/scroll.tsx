import { ReactLenis, useLenis } from "lenis/react";

export function Scroll({ children }: { children: React.ReactNode }) {
  //   useLenis(({ scroll, direction, velocity }) => {
  //     console.log(scroll, direction, velocity);
  //   });

  return <ReactLenis root>{children}</ReactLenis>;
}
