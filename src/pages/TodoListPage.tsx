import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../components/Container";
import { TodoCard } from "../components/TodoCard";

import { useGetTodos } from "../hooks/useGetTodos";
import { useClickAndNavigate } from "../hooks/useClickandNavigate";

export const TodoListPage = () => {
  const { handleClick } = useClickAndNavigate("/todos");

  // data fetch & handle states
  const { data, error, isLoading } = useGetTodos();

  if (error) {
    console.error(error);
    return <div>{`There was an Error fetching data`}</div>;
  }

  if (isLoading) return <div>Data is Loading...</div>;

  return (
    <section
      aria-labelledby="todo-list__page-title"
      className="py-section-padding"
    >
      <Container>
        <h1
          id="todo-list__page-title"
          className="text-accent text-center text-base md:text-2xl mb-2"
        >
          List of todos
        </h1>
        <div className="flex flex-col justify-center items-center ">
          {data ? (
            data.map((item) => {
              const { completed, id, title, userId } = item;
              return (
                <TodoCard
                  completed={completed}
                  title={title}
                  id={id}
                  userId={userId}
                  key={id}
                  handleClick={() => handleClick(id)}
                  style={{ cursor: "pointer" }}
                />
              );
            })
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </Container>
    </section>
  );
};
