
import group from "../images/group.png"
import menu from "../images/Menu.png"
import search from "../images/search.png"
import help from "../images/Help.png"


import React from 'react'

export const Topheader = () => {
    return (
        <>
            <div className=" top-[0px] bg-black-100 w-full h-full box-border  flex flex-row items-center justify-start py-3 px-8 gap-[16px] border-b-[1px] border-solid border-black-85">
                <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[16px]">

                    <div className="shrink-0 flex flex-row items-center justify-start gap-[6px] text-xs text-black-30">
                        <img
                            className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={help}
                        />
                        <div className="relative leading-[16px]">How it works</div>
                    </div>
                </div>
                <div className="self-stretch rounded-md bg-black-95 w-[400px] h-[33px] flex flex-row items-center justify-start py-[9px] px-4 box-border gap-[8px] text-mini text-black-50">
                    <img
                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src={search}
                    />
                    <input type="text" placeholder="Search features, tutorials, etc." className=" relative  bg-black-95 leading-[22px] w-full">

                    </input>
                </div>
                <div className="flex-1 shrink-0 flex flex-row items-start justify-end ">
                    <div className="shrink-0 flex flex-row items-start justify-start gap-[12px]">
                        <img
                            className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={group}
                        />
                        <img
                            className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={menu}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
