import type { MetaFunction } from "@remix-run/node";

import { META } from "../content";

export const meta: MetaFunction = () => {
  return [...META];
};

export default function Index() {
  return (
    <>
      <div className="section">
        <div className="h-[10vw] w-[10vw] border"></div>
      </div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
    </>
  );
}
