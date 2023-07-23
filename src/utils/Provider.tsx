"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={client}>
          <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
      <Toaster />
    </>
  );
}

export default Providers;
