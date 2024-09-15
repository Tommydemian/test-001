import { useQuery } from "@tanstack/react-query";

import { fetchData } from "../utils/fetchData";
import { baseUrl } from "../data";
import type { Todo } from "../types";

export function useGetTodos() {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => fetchData<Todo[]>(baseUrl),
  });
}
