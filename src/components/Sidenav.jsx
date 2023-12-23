import React from 'react'
import chevronDown from "../images/Chevron Down.png"
import navAnnounce from "../images/navAnnounce.png"
import navContact from "../images/navContact.png"
import navDetails from "../images/navDetail.png"
import navHome from "../images/navHome.png"
import navOffer from "../images/navOffer.png"
import navPayout from "../images/navPayout.png"
import navPower from "../images/navPower.png"
import navProduct from "../images/navProduct.png"
import navProgress from "../images/navProgress.png"
import navTheme from "../images/navTheme.png"
import nishantLogo from "../images/nishant-logo.png"
import wallet from "../images/wallet.png"
import navDeliver from "../images/navDeliver.png"

export const Sidenav = () => {
    const navCategory = [
        {
            "icon": navHome,
            "label": "Home"
        },
        {
            "icon": navDetails,
            "label": "Order"
        },
        {
            "icon": navProduct,
            "label": "Products"
        },
        {
            "icon": navDeliver,
            "label": "Delivery"
        },
        {
            "icon": navAnnounce,
            "label": "Marketing"
        },
        {
            "icon": navProgress,
            "label": "Analytics"
        },
        {
            "icon": navPayout,
            "label": "Payouts",
            "active": true
        },
        {
            "icon": navOffer,
            "label": "Discounts"
        },
        {
            "icon": navContact,
            "label": "Audience"
        },
        {
            "icon": navTheme,
            "label": "Appearance"
        },
        {
            "icon": navPower,
            "label": "Plugins"
        },
    ]

    return (
        <>
            <div className="h-[100%] flex flex-col items-start justify-start text-mini text-black-100">
                <div className="flex-1 bg-secondary-navbar w-full flex flex-col items-center justify-start py-4 px-2.5 box-border gap-[16px]">
                    <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
                        <div className="w-48 shrink-0 flex flex-row items-center justify-start relative gap-[12px]">
                            <div className="relative rounded bg-black-100 w-10 h-10 z-[0]" />
                            <div className="flex-1 flex flex-col items-start justify-center gap-[4px] z-[1]">
                                <div className="self-stretch relative leading-[22px] font-medium">
                                    Nishyan
                                </div>
                                <div className="self-stretch relative text-smi [text-decoration:underline] leading-[16px] opacity-[0.8]">
                                    Visit store
                                </div>
                            </div>
                            <img
                                className="absolute my-0 mx-[!important] top-[0.5px] left-[0.5px] rounded w-[39px] h-[39px] object-cover z-[2]"
                                alt=""
                                src={nishantLogo}
                            />
                            <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover z-[3]"
                                alt=""
                                src={chevronDown}
                            />
                        </div>
                        <div className="flex-1 shrink-0 flex flex-col items-start justify-start gap-[4px] text-sm">
                            {
                                navCategory?.map((item, index) => {
                                    return (
                                        <div className={`${item.active ? "bg-[#353C53]" : ""}  rounded w-52 shrink-0 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]`}>
                                            <img
                                                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                                                alt=""
                                                src={item.icon}
                                            />
                                            <div className="relative leading-[20px] font-medium opacity-[0.8]">
                                                {item.label}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="rounded bg-darkslategray w-48 flex flex-col items-start justify-start py-1.5 px-3 box-border text-smi">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                            <div className="rounded bg-gray shrink-0 flex flex-row items-start justify-start p-1.5">
                                <img
                                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                                    alt=""
                                    src={wallet}
                                />
                            </div>
                            <div className="shrink-0 flex flex-col items-start justify-start gap-[2px]">
                                <div className="relative leading-[16px] opacity-[0.8]">
                                    Available credits
                                </div>
                                <div className="relative text-base leading-[24px] font-medium">
                                    222.10
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
