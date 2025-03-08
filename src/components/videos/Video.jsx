import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { FiPlus } from "react-icons/fi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiSolidLabel } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";

import HeartIcon from "../../icons/HeartIcon";

function Video({ data }) {
  return (
    <div className="flex justify-center mb-[30px] h-full">
      <div className="flex items-center gap-[20px]">
        <div
          className={clsx(
            `rounded-xl overflow-hidden max-w-[1152px] w-[${data.meta.video.resolution_x}] h-full flex items-center`
          )}
        >
          <video
            className="rounded-xl"
            src={data?.file_url}
            muted
            controls
          ></video>
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
              <span>{data.likes_count}</span>
            </div>
          </div>
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <BiMessageRoundedDots className="text-[25px]" />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>{data.comments_count}</span>
            </div>
          </div>
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <BiSolidLabel className="text-[25px] rotate-[-90deg]" />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>110.5K</span>
            </div>
          </div>
          <div className="">
            <div className="w-[46px] h-[46px] overflow-hidden rounded-full border bg-[#1618230f] flex justify-center items-center">
              <BsShareFill />
            </div>
            <div className="text-center text-[12px] font-semibold">
              <span>{data.shares_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
