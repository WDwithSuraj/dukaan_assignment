
import navDetails from "../images/navDetail.png"
import search from "../images/search.png"
import sortIcon from "../images/Sort.png"
import downloadIcon from "../images/download.png"
import React from 'react'

export const PayoutDataContainer = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-start gap-[20px] w-full h-full">
                <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
                    <div className="relative leading-[28px] font-medium">
                        Transactions | This Month
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-start gap-[12px] text-sm text-black-100">
                        <div className="rounded-21xl bg-primary-blue shrink-0 flex flex-row items-center justify-start py-1.5 px-4 gap-[6px]">
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src={navDetails}
                            />
                            <div className="relative leading-[20px] font-medium">
                                Payouts (22)
                            </div>
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/outlined--settings@2x.png"
                            />
                        </div>
                        <div className="rounded-21xl bg-black-90 shrink-0 flex flex-row items-center justify-start py-1.5 px-4 gap-[10px] text-black-50">
                            <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/outlined--settings@2x.png"
                            />
                            <div className="relative leading-[20px] font-medium">
                                Refunds (2)
                            </div>
                            <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/outlined--settings@2x.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] w-[1152px] overflow-hidden flex flex-col items-end justify-start pt-3 px-3 pb-2 box-border text-xs">
                    <div className="flex flex-col items-end justify-start gap-[12px] text-base text-black-30">
                        <div className="self-stretch shrink-0 flex flex-row items-center justify-between">
                            <div className="w-[248px] shrink-0 flex flex-row items-start justify-start text-sm text-black-60">
                                <div className="flex-1 rounded bg-black-100 shrink-0 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] border-[1px] border-solid border-black-85">
                                    <img
                                        className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
                                        alt=""
                                        src={search}
                                    />
                                    <div className="flex-1 relative leading-[20px]">
                                        Order ID or transaction ID
                                    </div>
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/bold--cross@2x.png"
                                    />
                                </div>
                            </div>
                            <div className="rounded bg-black-100 shrink-0 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                                <div className="relative leading-[24px]">Filter</div>
                                <img
                                    className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                    alt=""
                                    src="/outlined--filters@2x.png"
                                />
                            </div>
                            <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                <div className="rounded bg-black-100 shrink-0 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                                    <div className="relative leading-[24px]">Filter</div>
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                        alt=""
                                        src="/outlined--filters@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <div className="rounded bg-black-100 shrink-0 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                                        <div className="relative leading-[24px]">Filter</div>
                                        <img
                                            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                            alt=""
                                            src="/outlined--filters@2x.png"
                                        />
                                    </div>
                                    <div className="shrink-0 flex flex-row items-center justify-end gap-[16px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <div className="rounded bg-black-100 shrink-0 flex flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                                                <div className="relative leading-[24px]">Sort</div>
                                                <img
                                                    className="relative w-4 h-4 shrink-0 object-cover"
                                                    alt=""
                                                    src={sortIcon}
                                                />
                                            </div>
                                            <div className="rounded bg-black-100 shrink-0 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                                                <div className="relative leading-[24px]">Filter</div>
                                                <img
                                                    className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                                                    alt=""
                                                    src="/outlined--filters@2x.png"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative w-9 h-9">
                                            <div className="absolute top-[0px] right-[0px] rounded box-border w-9 h-9 border-[1px] border-solid border-black-85" />
                                            <img
                                                className="absolute top-[8px] right-[8px] w-5 h-5 object-cover"
                                                alt=""
                                                src={downloadIcon}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded bg-black-95 w-[1128px] shrink-0 flex flex-row items-center justify-start py-2.5 px-3 box-border gap-[40px] text-right text-xs">
                            <img
                                className="relative w-5 h-5 object-cover hidden"
                                alt=""
                                src="/controls--check-box@2x.png"
                            />
                            <div className="flex-1 overflow-hidden flex flex-col items-start justify-center text-left">
                                <div className="flex flex-row items-center justify-start gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Date
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden flex flex-col items-start justify-center text-left">
                                <div className="flex flex-row items-center justify-start gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Status
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden flex flex-col items-start justify-center">
                                <div className="flex flex-row items-center justify-start gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Transaction ID
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] text-left hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden flex flex-col items-end justify-center">
                                <div className="flex flex-row items-center justify-start gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Order amount
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] text-left hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden flex flex-col items-end justify-center">
                                <div className="flex flex-row items-center justify-start gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Transaction fees
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] text-left hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                            <div className="w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center">
                                <div className="self-stretch flex flex-row items-center justify-end gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Refunds
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] text-left hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden flex flex-col items-end justify-center">
                                <div className="flex flex-row items-center justify-start gap-[4px]">
                                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                        <div className="relative w-12 h-12 hidden">
                                            <img
                                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                                alt=""
                                                src="/image@2x.png"
                                            />
                                        </div>
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                            <img
                                                className="relative w-5 h-5 object-cover hidden"
                                                alt=""
                                                src="/controls--check-box@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                        <div className="relative leading-[20px] font-medium">
                                                            Total
                                                        </div>
                                                        <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                            Strike-Through Data
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                        alt=""
                                                        src="/outlined--whatsapp@2x.png"
                                                    />
                                                    <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                        Italics
                                                    </i>
                                                </div>
                                                <div className="relative leading-[16px] text-left hidden w-[90px]">
                                                    +1 more
                                                </div>
                                                <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                                    Third Line
                                                </div>
                                                <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                                    <div className="relative leading-[16px] font-semibold">
                                                        COD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                        alt=""
                                        src="/triangleicon@2x.png"
                                    />
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                    <div className="relative rounded-[50%] w-0 h-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                Today, 09:00 PM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-black-60 w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Processing</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                    <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                Today, 03:00 PM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Successful</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                    <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                Today, 09:00 AM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Successful</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                    <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                Yesterday, 3:00 PM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Successful</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                    <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                Yesterday, 09:00 AM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Successful</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                    <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                12 Jul 2023, 03:00 PM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Successful</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                    <div className="bg-black-100 w-[1128px] flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="relative leading-[20px] font-medium">
                                                12 Jul 2023, 11:00 AM
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                                            Third Line
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[1] text-sm">
                            <div className="flex flex-row items-center justify-start">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                                    <div className="relative leading-[20px]">Successful</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2] text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    131634495747
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3]">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹10,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">
                                                    ₹1,125.00
                                                </div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹0.00</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[6] text-right text-black-30">
                            <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                                <div className="relative w-12 h-12 hidden">
                                    <img
                                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                                        alt=""
                                        src="/image@2x.png"
                                    />
                                </div>
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5 object-cover hidden"
                                        alt=""
                                        src="/controls--check-box@2x.png"
                                    />
                                    <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
                                        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                                <div className="relative leading-[20px]">₹9,312</div>
                                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                                    Strike-Through Data
                                                </div>
                                            </div>
                                            <img
                                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                                alt=""
                                                src="/outlined--whatsapp@2x.png"
                                            />
                                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                                Italics
                                            </i>
                                        </div>
                                        <div className="relative leading-[16px] text-left hidden w-[90px]">
                                            +1 more
                                        </div>
                                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                                            Third Line
                                        </div>
                                        <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                                            <div className="relative leading-[16px] font-semibold">
                                                COD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                                <div className="relative rounded-[50%] w-0 h-0" />
                                <div className="relative rounded-[50%] w-0 h-0" />
                            </div>
                        </div>
                        <img
                            className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[0px] left-[12px] max-w-full overflow-hidden max-h-full object-cover hidden z-[7]"
                            alt=""
                            src="/divider@2x.png"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
