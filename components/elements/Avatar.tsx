import React from "react";
import {
  Avatar as AvatarShadCn,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallBack: string;
}

function Avatar({ src, alt, fallBack }: AvatarProps) {
  return (
    <AvatarShadCn>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </AvatarShadCn>
  );
}

export default Avatar;
