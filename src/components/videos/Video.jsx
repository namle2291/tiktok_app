import React from "react";
import { FiPlus } from "react-icons/fi";
import HeartIcon from "../../icons/HeartIcon";

function Video() {
  return (
    <div className="flex justify-center mb-[10px]">
      <div className="flex items-end gap-[20px]">
        <div className="rounded-md overflow-hidden border w-[500px] h-[700px] bg-slate-50"></div>
        <div className="flex flex-col w-[48px] gap-[25px]">
          {/* User follow */}
          <div className="relative">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border">
              <img
                className="object-cover"
                src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
                alt=""
              />
            </div>
            <div className="w-[24px] h-[24px] absolute left-[50%] bottom-[-10px] translate-x-[-50%] bg-[#fe2c55] text-white rounded-full flex justify-center items-center cursor-pointer">
              <FiPlus />
            </div>
          </div>
          {/* React */}
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <HeartIcon width="25px" />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>110.5K</span>
            </div>
          </div>
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <HeartIcon width="25px" />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>110.5K</span>
            </div>
          </div>
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <HeartIcon width="25px" />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>110.5K</span>
            </div>
          </div>
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <HeartIcon width="25px" />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>110.5K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
