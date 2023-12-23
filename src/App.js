
import './App.css';
import { PayoutBill } from './components/PayoutBill';

import { PayoutbillDetail } from './components/PayoutbillDetail';
import { Sidenav } from './components/Sidenav';

import { Topheader } from './components/Topheader';




function App() {
  return (

    <>


      <div className="mainContainer w-full  h-[100vh] flex  bg-black-98 text-black-12 font-sub-body-regular">
        <div className="sideNav  h-[100%] w-[20%]" >
          <Sidenav />
        </div>
        <div className="dataContainer  h-[100%]   w-full flex  flex-col">
          <div className="headNav  h-[9%] ">
            <Topheader />
          </div>
          <div className="billDetail ml-[32px]  h-[28%] mr-5 mt-2 mb-4">
            <PayoutBill />
          </div>

          <div className="lowerData ml-[32px]  h-[59%]  mt-10 mr-5">
            <PayoutbillDetail />

          </div>
        </div>
      </div>


    </>


  );
}

export default App;
