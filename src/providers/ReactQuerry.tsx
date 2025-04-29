import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { IChildren } from "../types/interfaces";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 1000 * 60 * 5,
        },
    },
});


export const ReactQueryProvider: FC<IChildren> = ({ children }) => (
    <QueryClientProvider client= { queryClient } > { children } </QueryClientProvider>
);