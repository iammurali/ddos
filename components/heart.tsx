"use client";
import { useState } from "react";
import Heart from "react-animated-heart";

export default function HeartIconAnimated({addLike}:{addLike: ()=> void}) {
  const [isClick, setClick] = useState(false);

  return (
    <Heart
      isClick={isClick}
      onClick={async () => {
        if(!isClick) {
            addLike()
        }
        setClick(true);
      }}
    />
  );
}
