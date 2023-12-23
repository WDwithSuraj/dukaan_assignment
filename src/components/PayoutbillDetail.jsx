import React, { useState } from 'react'
import search from "../images/search.png"
import sortIcon from "../images/Sort.png"
import downloadIcon from "../images/download.png"
import { Succful } from './status/Succful'
import { Processing } from './status/Processing'
export const PayoutbillDetail = () => {
    const [payoutBtn, setPayoutBtn] = useState(true);
    const [refundBtn, setRefundBtn] = useState(false)

    const refundDataTable = [
        {
            "orderId": "#281205",
            "status": true,
            "transactionId": "131634495749",
            "refundDate": "Today, 08:45 PM",
            "amount": 1425.00
        },
        {
            "orderId": "#281508",
            "status": false,
            "transactionId": "131634495748",
            "refundDate": "Today, 08:45 PM",
            "amount": 1355.00
        },
        {
            "orderId": "#281206",
            "status": true,
            "transactionId": "131634495746",
            "refundDate": "Today, 08:45 PM",
            "amount": 1335.00
        },


    ]

    const payoutsData = [
        {
            "orderId": "#283208",
            "status": false,
            "transactionId": "131634495747",
            "refundDate": "Today, 08:45 PM",
            "amount": 1325.00
        },
        {
            "orderId": "#261208",
            "status": false,
            "transactionId": "131634495746",
            "refundDate": "Today, 08:45 PM",
            "amount": 1525.00
        },
        {
            "orderId": "#284208",
            "status": true,
            "transactionId": "131634495745",
            "refundDate": "Today, 08:45 PM",
            "amount": 1625.00
        },
    ]

    const handlePayoutClick = () => {
        setPayoutBtn(true);
        setRefundBtn(false)
    }

    const handleRefundBtnClick = () => {
        setRefundBtn(true);
        setPayoutBtn(false)
    }

    return (
        <>

            <div className='m-0 p-0'>
                <p className='m-0 p-0 text-[#1A181E] font-sub-body-regular text-[1.25rem] font-[500] '>Transactions | This Month</p>
                <div className='flex gap-1 m-0 p-0 h-[60px] '>
                    <p onClick={handlePayoutClick} className={`rounded-[2.5rem] font-sub-body-regular text-[0.875rem] ${payoutBtn ? "bg-[#146EB4]" : ' bg-[#808080]'}  text-[#FFFFFF] p-[0.5rem]`}>Payouts(22)</p>
                    <p onClick={handleRefundBtnClick} className={`rounded-[2.5rem] font-sub-body-regular text-[0.875rem] ${refundBtn ? "bg-[#146EB4]" : ' bg-[#808080]'}  text-[#FFFFFF] p-[0.5rem]`}>Refunds(6)</p>
                </div>
            </div>
            <div className='bg-white shadow-[ 0px 2px 6px 0px rgba(26, 24, 30, 0.04)] rounded-md p-3'>
                <div className='flex justify-between'>
                    <div className="orderId w-[25%] rounded-sm h-[15px] flex gap-3 p-4 items-center border-slate-500 border-solid border-[1px] px-2 py-2">
                        <div className="searchImgae mt-1">
                            <img src={search} alt="" width={"15rem"} />
                        </div>
                        <input type="text" placeholder='Order ID or transaction ID' />
                    </div>

                    <div className="sortIcon flex items-center gap-3  ">
                        <div className="sort flex items-center rounded-sm gap-2 h-[25px] p-1 border-slate-500 border-solid border-[1px] ">
                            <p>Sort</p>
                            <div className="img mt-1">
                                <img src={sortIcon} width={"20rem"} alt="" />
                            </div>
                        </div>
                        <div className="downloadIcon rounded-sm w-[60%] p-1 border-slate-500 border-solid border-[1px] ">
                            <img src={downloadIcon} width={"20rem"} alt="" />
                        </div>
                    </div>
                </div>
                <div className='text-sm flex p-2 h-[20px] mt-1 justify-between items-center rounded-[0.25rem] bg-[#F2F2F2]'>
                    <p >Order ID</p>
                    <p>Status</p>
                    <p>Transaction ID</p>
                    <p>Refund date</p>
                    <p>Order amount</p>
                </div>

                {
                    refundBtn ? refundDataTable?.map((item, index) => {
                        return (
                            <div className='text-sm flex p-2 h-[20px] mt-1 justify-between items-center rounded-[0.25rem] bg-[#FFF] border-b-[1px] border-solid border-[#999999]'>
                                <p className='text-[#146EB4] font-[500]'>{item.orderId}</p>
                                <p>{item.status ? <Succful /> : <Processing />}</p>
                                <p>{item.transactionId}</p>
                                <p>{item.refundDate}</p>
                                <p>{`₹${item.amount.toLocaleString('en-US', {
                                    minimumFractionDigits: 2, // Specify the minimum number of fraction digits
                                    maximumFractionDigits: 2, // Specify the maximum number of fraction digits
                                })}`}</p>
                            </div>
                        )
                    })
                        : payoutsData?.map((item, index) => {
                            return (
                                <div className='text-sm flex p-2 h-[20px] mt-1 justify-between items-center rounded-[0.25rem] bg-[#FFF] border-b-[1px] border-solid border-[#999999]'>
                                    <p className='text-[#146EB4] font-[500]'>{item.orderId}</p>
                                    <p>{item.status ? <Succful /> : <Processing />}</p>
                                    <p>{item.transactionId}</p>
                                    <p>{item.refundDate}</p>
                                    <p>{`₹${item.amount.toLocaleString('en-US', {
                                        minimumFractionDigits: 2, // Specify the minimum number of fraction digits
                                        maximumFractionDigits: 2, // Specify the maximum number of fraction digits
                                    })}`}</p>
                                </div>
                            )
                        })
                }

            </div>


        </>
    )
}
