import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  imageOnly?: boolean;
  className?: string;
}

export default function Logo({ imageOnly = false, className }: Props) {
  return (
    <div className={cn("logo w-[33px] h-[38] flex items-center", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="p-2 rounded-full bg-green-brand"
      >
        <path d="m15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1H15.4zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7H5.75z"></path>
      </svg>

      {!imageOnly && <h1 className="ml-2 font-bold text-2xl">BiHamTha.</h1>}
    </div>
  );
}
