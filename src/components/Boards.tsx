'use server';

// import BoardsTiles from "@/components/BoardsTiles";
import {liveblocksClient} from "@/lib/liveblocksClient";
import {getUserEmail} from "@/lib/userClient";
import Link from "next/link";

export default async function Boards() {
  const email = await getUserEmail();
  const {data:rooms} = await liveblocksClient.getRooms({userId: email});
  return (
    <>
    {rooms?.length > 0 && rooms.map(room => (
        <Link key={room.id} href={`/boards/${room.id}`}>
            <div>
                {room.metadata.boardName}
            </div>
        </Link>
    ))}
    </>
    // <BoardsTiles boards={rooms} />
  );
}