import React from "react";
import { BiSearch } from "react-icons/bi";
import Button from "./buttons/Button";

export default function Header() {
  return (
    <div className="pl-[16px] pr-[24px] border border-grey-500 h-[60px] flex justify-between items-center">
      <div className="w-[118px]">
        <img
          className="w-full"
          src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
          alt=""
        />
      </div>
      <div className="w-[516px] rounded-3xl bg-slate-100  pl-[16px] flex items-center overflow-hidden">
        <input
          className="w-full outline-none text-gray-600 bg-transparent border-e"
          type="text"
        />
        <div className="w-[52px] py-[12px] flex items-center justify-center hover:bg-gray-200 text-[20px] cursor-pointer">
          <BiSearch />
        </div>
      </div>
      <div className="">
        <Button
          content="Đăng nhập"
          className="bg-[#fe2c55] text-white p-[6px] outline-none rounded-md w-[100px]"
        />
      </div>
    </div>
  );
}
