import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DefaultLayout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
    </>
  );
}
