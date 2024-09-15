import React from "react";

type ListProps<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  getVal: (item: T) => React.ReactNode;
};

export function List<T>({ items, getKey, getVal }: ListProps<T>) {
  return (
    <ul className="list-none" role="list">
      {items &&
        items.map((item) => (
          <li role="listitem" key={getKey(item)}>
            {getVal(item)}
          </li>
        ))}
    </ul>
  );
}
