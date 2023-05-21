import React from "react";
import "./App.css";
import image from "./assets/AI-Affino-Main-1920-X-1080.jpg";
import MenuSec from "./Components/MenuSec";
import Heading from "./Components/Heading";
import BottomSec from "./Components/BottomSec";

function App() {
  return (
    <>
      <div className="w-full h-[1000px] m-0 p-0">
        <div className="">
          <img
            src={image}
            alt=""
            className="relative w-full h-[860px] bg-center bg-cover bg-no-repeat bg-fixed"
          />
        

        <div className="w-full h-[860px] bg-black absolute z-50 top-0 opacity-60"></div>
        <div className="w-[1180px] m-auto">
          <div>
            {/* -----------MenuSec------------ */}
            <MenuSec />
            <div>
              {/* --------------Heading------------- */}
              <Heading />
              {/* ------------Bottom Sec---------- */}
              <BottomSec />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
