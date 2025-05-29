// hooks/usePaginator.ts
import { useState, useCallback } from "react";

type UsePaginatorReturn<T> = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
  paginatedItems: T[];
};

export function usePaginator<T>(items: T[], itemsPerPage: number): UsePaginatorReturn<T> {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  return {
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage,
    paginatedItems
  };
}