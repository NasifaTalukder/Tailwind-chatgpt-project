import React from "react";
import logo2 from "../assets/images-removebg-preview (1).png";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Button from "@mui/material/Button";
const MenuSec = () => {
  return (
    <>
      <div className="absolute z-[1000] top-1">
        <img src={logo2} alt="" className="w-[150px]" />
      </div>
      <div>
        <div>
          <ul className="text-white absolute top-2 z-[1000] flex flex-wrap ml-56 space-x-11 mt-8 text-lg font-medium">
            <li>
              Research <KeyboardArrowDownSharpIcon />
            </li>
            <li>
              Products
              <KeyboardArrowDownSharpIcon />
            </li>
            <li>
              developers
              <KeyboardArrowDownSharpIcon />
            </li>
            <li>
              Safety
              <KeyboardArrowDownSharpIcon />
            </li>
            <li>
              Company
              <KeyboardArrowDownSharpIcon />
            </li>
          </ul>
        </div>
        <div className="absolute z-[1000] top-5 justify-self-end ml-[1040px] mt-5 ">
          <Button variant="outlined" endIcon={<SearchSharpIcon />}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default MenuSec;
