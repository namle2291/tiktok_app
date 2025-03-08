import React from "react";
import clsx from "clsx";
import { FiPlus } from "react-icons/fi";
import HeartIcon from "../../icons/HeartIcon";

function Video({ data }) {
  return (
    <div className="flex justify-center mb-[10px]">
      <div className="flex items-end gap-[20px]">
        <div
          className={clsx(
            `rounded-md overflow-hidden border w-[${data.meta.video.resolution_x}] h-[${data.meta.video.resolution_y}] bg-slate-50`
          )}
        >
          <video src={data?.file_url} muted controls></video>
        </div>
        <div className="flex flex-col w-[48px] gap-[25px]">
          {/* User follow */}
          <div className="relative">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border">
              <img className="object-cover" src={data.user.avatar} alt="" />
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
