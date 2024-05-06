import React from "react";
import Logo from "./elements/Logo";
import Avatar from "./elements/Avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  return (
    <header className="flex justify-between min-h-[80px] items-center ml-20">
      <div className="logo">
        <Logo />
      </div>
      <div className="mr-20 avatar flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Avatar src="/avatar.jpeg" alt="avatar" fallBack="BS" />
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className="ml-2 font-bold">EUR</div><br></br>
      </div>
    </header>
  );
}

export default Header;