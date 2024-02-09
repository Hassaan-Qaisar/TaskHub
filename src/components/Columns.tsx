"use client";

import React from "react";
import NewColumnForm from "@/components/forms/NewColumnForm";
import { Column, useMutation, useStorage } from "@/app/liveblocks.config";
import { ReactSortable } from "react-sortablejs";
import { LiveList, LiveObject, shallow } from "@liveblocks/core";
import {default as BoardColumn} from '@/components/Column';

export const Columns = () => {
  const columns = useStorage(
    (root) => root.columns.map((c) => ({ ...c })),
    shallow
  );

  const updateColumns = useMutation(
    ({ storage }, columns: LiveObject<Column>[]) => {
      storage.set("columns", new LiveList(columns));
    },
    []
  );
    
  function setColumnsOrder(sortedColumns: Column[]) {
    const newColumns: LiveObject<Column>[] = [];
    sortedColumns.forEach((sortedColumn, newIndex) => {
      const newSortedColumn = { ...sortedColumn };
      newSortedColumn.index = newIndex;
      newColumns.push(new LiveObject(newSortedColumn));
    });
    updateColumns(newColumns);
  }

  if (!columns) {
    return;
  }

  return (
    <div className="flex gap-4">
      <ReactSortable
        group={"board-column"}
        list={columns}
        className="flex gap-4"
        ghostClass="opacity-40"
        setList={setColumnsOrder}
      >
        {columns?.length > 0 &&
          columns.map((column) => <BoardColumn {...column} key={column.id} />)}
      </ReactSortable>
      <NewColumnForm />
    </div>
  );
};
