import React from "react";
import Image from "next/image";

const ImageComponent: React.FC = () => {
  return (
    <Image
      src="/images/hero2.png"
      alt="Hero Image"
      layout="fill"
      objectFit="contain"
      objectPosition="center"
      priority
    />
  );
};

export default ImageComponent;
