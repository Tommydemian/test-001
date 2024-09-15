import { useParams } from "react-router-dom";
import { useGetTodo } from "../hooks/useGetTodo";

import { Container } from "../components/Container";
import { TodoCard } from "../components/TodoCard";

export const TodoListDetails = () => {
  const { todoId } = useParams<{ todoId: string }>();

  const { data, error, isLoading } = useGetTodo(todoId ?? "");

  if (!todoId) {
    return <div role="alert">Error: Todo ID is missing</div>;
  }

  if (error) {
    console.error(error);
    return <div role="alert">There was an Error fetching data</div>;
  }

  if (isLoading) return <div>Data is Loading...</div>;

  return (
    <section
      aria-labelledby="todo-details__title"
      className="my-section-padding"
    >
      <Container>
        <h1 id="todo-details__title">Details from {todoId}</h1>
        <div className="grid grid-cols-1">
          {data ? (
            <TodoCard
              completed={data.completed}
              title={data.title}
              id={data.id}
              userId={data.userId}
            />
          ) : (
            <p role="alert">No data found for this todo item</p>
          )}
        </div>
      </Container>
    </section>
  );
};
