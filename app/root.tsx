import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import tailwind from "~/tailwind.css?url";

import { Scroll } from "./components/Scroll";
import { Nav } from "./components/Nav";

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
          {/* <ScrollRestoration /> */}
          <Scripts />
        </Scroll>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  const routeError = useRouteError();

  return (
    <Layout>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      {routeError ? <pre>{routeError.message}</pre> : null}
    </Layout>
  );
}
