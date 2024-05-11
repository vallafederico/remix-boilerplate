import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import tailwind from "~/tailwind.css?url";

import { Scroll } from "./components/Scroll";
import { Nav } from "./components/Nav";
import { Canvas } from "./components/Canvas";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="bg-black text-base text-white">
        <Nav />
        <Scroll>
          {children}
          <ScrollRestoration />
          <Scripts />
        </Scroll>

        <Canvas />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
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
