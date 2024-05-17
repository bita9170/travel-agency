import React from "react";
import {
  Avatar as AvatarShadCn,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface AvatarProps {
  src?: string | null;
  alt?: string | null;
  fallBack: string;
}

function Avatar({ src, alt, fallBack }: AvatarProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <AvatarShadCn className="h-12 w-12">
            <AvatarImage src={src} alt={} />
            <AvatarFallback>{fallBack}</AvatarFallback>
          </AvatarShadCn>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle className="flex gap-2 items-center">
              <AvatarShadCn>
                <AvatarImage src={src} alt={alt} />
                <AvatarFallback>{fallBack}</AvatarFallback>
              </AvatarShadCn>
              <Label>John Doe</Label>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-1 mt-4">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zM16 18h-1.5V9H16v9zm1-12h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.5-2.5h3V6h-3V3.5zM17 19H7V8h10v11z"></path>
              </svg>
              <Button asChild variant={"link"} className="text-black px-0">
                <Link href="#">Trips</Link>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path>
              </svg>
              <Button asChild variant={"link"} className="text-black px-0">
                <Link href="#">write a review</Link>
              </Button>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"></path>
                <path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>
              </svg>
              <Button asChild variant={"link"} className="text-black px-0">
                <Link href="#">Profile</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M22 10V6a2 2 0 0 0-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"></path>
              </svg>
              <Button asChild variant={"link"} className="text-black px-0">
                <Link href="#">Bookings</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path>
              </svg>
              <Button asChild variant={"link"} className="text-black px-0">
                <Link href="#">Notifications</Link>
              </Button>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
              </svg>
              <Button asChild variant={"link"} className="text-black px-0">
                <Link href="#">Account info</Link>
              </Button>
            </div>
            <Button variant={"outline"} className="mt-4" type="submit">
              <LogoutLink>Logout</LogoutLink>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Avatar;
