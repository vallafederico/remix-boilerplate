import { useGlRef } from "~/hooks/useGlRef";

export const Track = ({ children }: { children: ReactNode }) => {
  const trackRef = useGlRef("ball");

  return (
    <div ref={trackRef} className="">
      {children}
    </div>
  );
};
