import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default function DefaultLayout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}
