import React from "react";
import Button from "./buttons/Button";
import { FiHome } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="w-[240px] border h-[calc(100vh-60px)] p-[12px]">
      <Button className="block border w-full p-[10px]" iconLeft={<FiHome />} content="Đề xuất" />
      <Button className="block border w-full p-[10px]" iconLeft={<FiHome />} content="Đề xuất" />
      <Button className="block border w-full p-[10px]" iconLeft={<FiHome />} content="Đề xuất" />
      <Button className="block border w-full p-[10px]" iconLeft={<FiHome />} content="Đề xuất" />
      <Button className="block border w-full p-[10px]" iconLeft={<FiHome />} content="Đề xuất" />
    </div>
  );
}

export default Sidebar;
