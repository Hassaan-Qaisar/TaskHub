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
  index: number;
  columnId: string;
};

const defaultCards = [
  { id: "asdf", name: "task 1", index: 0, columnId: "col1" },
  { id: "asdo", name: "task 5", index: 1, columnId: "col1" },
  { id: "asasd", name: "task 2", index: 1, columnId: "col2" },
  { id: "ahgdh", name: "task 3", index: 2, columnId: "col3" },
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
          key={column.id}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((c) => c.columnId === column.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  );
};

export default Board;
