"use client";
import React, { useState } from "react";
import { NewColumnForm } from "./forms/NewColumnForm";
import { Column } from "./Column";

const defaultColumns = [
  { id: "col1", name: "todo", index: 0 },
  { id: "col2", name: "in progress", index: 1 },
  { id: "col3", name: "done", index: 2 },
];

export type CardType = {
  name: string;
  id: string | number;
  order: number;
  columnId: string;
};

const defaultCards = [
  { id: "asdf", name: "task 1", order: 0, columnId: "col1" },
  { id: "asdf", name: "task 5", order: 0, columnId: "col1" },
  { id: "asasd", name: "task 2", order: 1, columnId: "col2" },
  { id: "ahgdh", name: "task 3", order: 2, columnId: "col3" },
];

const Board = () => {
  const [cards, setCards] = useState(defaultCards);
  const [columns, setColumns] = useState(defaultColumns);

  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <Column
          {...column}
          setCards={setCards}
          key={column.index}
          cards={cards.filter((c) => c.columnId === column.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  );
};

export default Board;
