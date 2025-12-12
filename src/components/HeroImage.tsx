"use client";

import React from "react";
import GridDistortion from "./GridDistortion";

function HeroImage() {
  return (
    <div className="hidden lg:block lg:h-[700px] lg:w-[700px]">
      <GridDistortion
        imageSrc="/Grad_07.webp"
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="images"
      />
    </div>
  );
}

export default HeroImage;
