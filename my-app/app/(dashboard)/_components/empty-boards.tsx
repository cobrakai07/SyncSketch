import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/note.svg"} height={110} width={110} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">Craete your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2 ">
        Start by creating a board for your organization{" "}
      </p>
      <div className="mt-6">
        <Button size={"lg"}>Create Board</Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
