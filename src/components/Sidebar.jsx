import React from "react";
import Button from "./buttons/Button";
import { FiHome } from "react-icons/fi";
import HomeIcon from "../icons/HomeIcon";
import CompassIcon from "../icons/CompassIcon";
import UserLeftArrowIcon from "../icons/UserLeftArrowIcon";
import PlusIcon from "../icons/PlusIcon";
import UserIcon from "../icons/UserIcon";

function Sidebar() {
  return (
    <div className="w-[240px] h-[calc(100vh-60px)] p-[12px] font-semibold">
      <Button
        className="w-full mb-[5px] p-[10px] flex items-center gap-4 hover:bg-slate-100 rounded-md text-red-600"
        iconLeft={<div className="w-[35px] flex justify-center"><HomeIcon width="30px" /></div>}
        content="Đề xuất"
      />
      <Button
        className="w-full mb-[5px] p-[10px] flex items-center gap-4 hover:bg-slate-100 rounded-md"
        iconLeft={<div className="w-[35px] flex justify-center"><CompassIcon width="30px" /></div>}
        content="Khám phá"
      />
      <Button
        className="w-full mb-[5px] p-[10px] flex items-center gap-4 hover:bg-slate-100 rounded-md"
        iconLeft={<div className="w-[35px] flex justify-center"><UserLeftArrowIcon width="25px" /></div>}
        content="Đang Follow"
      />
      <Button
        className="w-full mb-[5px] p-[10px] flex items-center gap-4 hover:bg-slate-100 rounded-md"
        iconLeft={<div className="w-[35px] flex justify-center"><PlusIcon width="25px" /></div>}
        content="Tải lên"
      />
      <Button
        className="w-full mb-[5px] p-[10px] flex items-center gap-4 hover:bg-slate-100 rounded-md"
        iconLeft={<div className="w-[35px] flex justify-center"><UserIcon width="25px" /></div>}
        content="Hồ sơ"
      />
    </div>
  );
}

export default Sidebar;
