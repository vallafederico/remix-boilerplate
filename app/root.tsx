import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import { Scroll } from "./components/Scroll";
import { Nav } from "./components/Nav";
import { Canvas } from "./components/Canvas";
import { useNavigationCallback } from "./hooks/useNavigationCallback";

import { Gl } from "./gl";

import { DEFAULT_CACHE } from "./utils/";

import tailwind from "~/tailwind.css?url";
import type {
  LinksFunction,
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { json } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

export const action = async ({ request }): ActionFunctionArgs => {
  // console.log(request);

  return { data: "hello" };
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // console.log(request);

  return json(
    { ok: true, data: "hello" },
    {
      headers: {
        ...DEFAULT_CACHE,
      },
    },
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  useNavigationCallback(Gl.page.bind(Gl));

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
