import React, { MouseEventHandler } from "react";
import { Todo } from "../types";

type TodoCardProps = Todo & {
  handleClick?: MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
};

export const TodoCard: React.FC<TodoCardProps> = ({
  title,
  id,
  completed,
  userId,
  handleClick,
  style,
}) => {
  return (
    <article
      className="w-11/12 md:w-9/12 rounded-md px-8 py-2 my-4 border shadow-sm border-[#333] transition-shadow hover:shadow-md"
      aria-label="todo card details"
      onClick={handleClick}
      style={style}
    >
      <dl className="flex flex-col gap-x-2">
        <div className="flex gap-y-2 w-full justify-center">
          <dt className="font-bold">Title:</dt>
          <dd>{title}</dd>
        </div>
        <div className="flex gap-y-2 w-full justify-center">
          <dt className="font-bold">Id:</dt>
          <dd>{id}</dd>
        </div>
        <div className="flex gap-y-2 w-full justify-center">
          <dt className="font-bold">Completed:</dt>
          <dd>{completed}</dd>
        </div>
        <div className="flex gap-y-2 w-full justify-center">
          <dt className="font-bold">User Id:</dt>
          <dd>{userId}</dd>
        </div>
      </dl>
    </article>
  );
};
