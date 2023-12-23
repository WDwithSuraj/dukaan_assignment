
import React from 'react'
import chevronRight from "../images/Chevron Right.png"
import help from "../images/Help.png"
import nextHelp from "../images/nexxtHelp.png"
import downArrow from "../images/arrow.png"
import chevronRightBlue from "../images/chevron-right-blue.png";



export const PayoutBill = () => {
    return (
        <>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative leading-[28px] font-medium text-[25px]">Overview</div>
                    <div className="shrink-0 flex flex-row items-center justify-start text-base text-black-30">
                        <div className="relative w-[137px] h-9">
                            <div className="absolute top-[0px] left-[0px] rounded bg-black-100 box-border w-[137px] h-9 border-[1px] border-solid border-black-85" />
                            <div className="absolute top-[6px] left-[14px] leading-[24px]">
                                This Month
                            </div>
                            <img
                                className="absolute top-[10px] left-[107px] w-4 h-4 overflow-hidden object-cover"
                                alt=""
                                src={downArrow}
                            />
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-base text-black-30">
                    <div className="flex-1 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-center justify-center relative text-black-100">
                        <div className="self-stretch rounded-spacing-spacing-04 bg-primary-blue h-[150px] flex flex-col items-start justify-start p-5 box-border z-[0]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                <div className="self-stretch flex flex-row items-center justify-between">
                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
                                        <div className="relative leading-[24px]">Next Payout</div>
                                        <img
                                            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                            alt=""
                                            src={nextHelp}
                                        />
                                    </div>
                                    <div className="relative text-sm leading-[20px] hidden">
                                        by Today, 04:00 PM
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-between text-13xl">
                                    <div className="relative leading-[38px] font-medium">
                                        ₹2,312.23
                                    </div>
                                    <div className="shrink-0 flex flex-row items-center justify-start text-base">
                                        <div className="shrink-0 flex flex-row items-start justify-start">
                                            <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                                                23 orders
                                            </div>
                                        </div>
                                        <img
                                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                                            alt=""
                                            src={chevronRight}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-0 mx-[!important] absolute top-[115px] left-[0px] rounded-lg   rounded-tl-none rounded-tr-none bg-hover-blue w-[100%] flex flex-row items-start justify-between py-2 px-6 box-border z-[1] text-sm text-black-95">
                            <div className="relative leading-[20px]">Next payout date:</div>
                            <div className="relative leading-[20px] font-medium">
                                Today, 04:00PM
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 shrink-0 flex flex-row items-center justify-center">
                        <div className="flex-1 rounded-spacing-spacing-04 bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                <div className="flex flex-row items-center justify-start gap-[8px]">
                                    <div className="relative leading-[24px]">
                                        Amount Pending
                                    </div>
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                        alt=""
                                        src={help}
                                    />
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-between text-13xl text-black-12">
                                    <div className="relative leading-[38px] font-medium">
                                        ₹92,312.20
                                    </div>
                                    <div className="shrink-0 flex flex-row items-center justify-start text-base text-primary-blue">
                                        <div className="shrink-0 flex flex-row items-start justify-start">
                                            <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                                                13 orders
                                            </div>
                                        </div>
                                        <img
                                            className="text-blue relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                                            alt=""
                                            src={chevronRightBlue}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 shrink-0 flex flex-row items-center justify-center">
                        <div className="flex-1 rounded-spacing-spacing-04 bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                <div className="flex flex-row items-center justify-start gap-[8px]">
                                    <div className="relative leading-[24px]">
                                        Amount Processed
                                    </div>
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                        alt=""
                                        src={help}
                                    />
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-between text-13xl text-black-12">
                                    <div className="flex-1 shrink-0 flex flex-row items-center justify-between">
                                        <div className="relative leading-[38px] font-medium">
                                            ₹23,92,312.19
                                        </div>
                                        <div className="shrink-0 hidden flex-row items-start justify-start text-sm text-primary-blue">
                                            <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                                                View 23 orders
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shrink-0 hidden flex-row items-center justify-start text-base text-primary-blue">
                                        <div className="shrink-0 flex flex-row items-start justify-start">
                                            <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                                                3,231 orders
                                            </div>
                                        </div>
                                        <img
                                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                                            alt=""
                                            src={chevronRight}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
