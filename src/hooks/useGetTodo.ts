import { useQuery } from "@tanstack/react-query";

import { fetchData } from "../utils/fetchData";
import { baseUrl } from "../data";
import { Todo } from "../types";

export function useGetTodo(todoId: string) {
  return useQuery<Todo>({
    queryKey: ["one-todo"],
    queryFn: () => fetchData<Todo>(`${baseUrl}/${todoId}`),
    enabled: todoId !== "",
  });
}
