import type { MetaFunction, HeadersFunction } from "@remix-run/node";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";

import { META, DEFAULT_CACHE } from "~/utils/";

export const meta: MetaFunction = () => [...META];
export const headers: HeadersFunction = () => DEFAULT_CACHE;

export default function Index() {
  return (
    <>
      <h1>Contact</h1>
      <div className="section">
        <div className="h-[10vw] w-[10vw] border"></div>
      </div>
      <div className="section">
        <div className="h-[10vw] w-[10vw] border"></div>
      </div>
      <div className="section">
        <div className="h-[10vw] w-[10vw] border"></div>
      </div>
      <div className="section">
        <div className="h-[10vw] w-[10vw] border"></div>
      </div>
    </>
  );
}

/** -- Error */
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
