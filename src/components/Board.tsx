"use client";
import React from "react";
import { RoomProvider } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/core";
import { ClientSideSuspense } from "@liveblocks/react";
import { Columns } from "./Columns";

const Board = ({ id }: { id: string }) => {

  return (
    <RoomProvider
      id={id}
      initialPresence={{}}
      initialStorage={{
        columns: new LiveList(),
        cards: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={(<div>loading...</div>)}>
        {() => (
          <>
            <Columns />
          </>
        )}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Board;
