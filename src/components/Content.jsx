import React from "react";
import Video from "./videos/Video";

function Content() {
  return (
    <div className="h-[calc(100vh-60px)] py-[20px] border flex-1 overflow-y-auto">
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default Content;
