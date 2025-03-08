import React, { useEffect, useState } from "react";
import Video from "./videos/Video";
import htttpRequest from "../axios/htttpRequest";

function Content() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    login();
    getVideos();
  }, []);

  async function login() {
    const result = await htttpRequest.post("/api/auth/login", {
      email: "lnam6507@gmail.com",
      password: "sonnam2001",
    });
  }

  async function getVideos() {
    const result = await htttpRequest.get("/api/videos?type=following&page=1");
    setVideos(result?.data.data);
  }

  return (
    <div className="h-[calc(100vh-60px)] py-[20px] px-[20px]  flex-1 overflow-y-auto">
      {videos.length > 0 && videos.map((data) => <Video data={data} />)}
    </div>
  );
}

export default Content;
