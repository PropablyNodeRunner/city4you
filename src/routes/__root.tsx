import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-foreground tracking-tighter">404</h1>
        <h2 className="mt-4 text-xl font-bold uppercase tracking-widest text-foreground">
          Stránka nenalezena
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest text-background hover:bg-accent"
          >
            Zpět na úvod
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold uppercase tracking-widest text-foreground">
          Stránka se nenačetla
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Něco se na naší straně pokazilo. Zkuste obnovit stránku nebo se vraťte na úvod.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest text-background hover:bg-accent"
          >
            Zkusit znovu
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border-2 border-foreground bg-background px-5 py-3 text-xs font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background"
          >
            Zpět na úvod
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "City4you s.r.o. — Stavební a zemní práce v MS kraji" },
      {
        name: "description",
        content:
          "Kvalitní stavební a zemní práce v Moravskoslezském kraji. Výkopy, pokládka dlažby, odvodnění a demolice s vlastní technikou.",
      },
      { name: "author", content: "City4you s.r.o." },
      { property: "og:title", content: "City4you s.r.o. — Stavební a zemní práce" },
      {
        property: "og:description",
        content: "Kvalitní stavební a zemní práce v Moravskoslezském kraji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=JetBrains+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
