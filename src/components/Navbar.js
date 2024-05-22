import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { MdVideocam } from "react-icons/md";
import { LiaTvSolid } from "react-icons/lia";
import { ImMagicWand } from "react-icons/im";
import { GoVideo } from "react-icons/go";
import { FaVideo } from "react-icons/fa";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, docColor }) => (
  <Tooltip title={title} placement="bottom">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="justify-center items-center text-center relative text-xl rounded-full p-5 hover:bg-gray-200"
    >
      <span
        style={{
          backgroundColor: "dotColor",
        }}
        className="absolute inline-flex rounded-full h-2 right-2 top-2"
     />
        {icon}
      
    </button>
  </Tooltip>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, []);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div>
        <NavButton
          title="Videos"
          color="blue"
          icon={<GoVideo/>}
          customFunc={() => handleClick('action')}
        />
      </div>
      <div>
        <NavButton
          title="Live tv"
          color="green"
          icon={<LiaTvSolid/>}
          customFunc={() => handleClick('tv')}
        />
      </div>
      <div>
        <NavButton
          title="Music"
          color="green"
          icon={<FaVideo/>}
          customFunc={() => handleClick('music')}
        />
      </div>
      <div>
        <Tooltip title="profile" placement="bottom">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-200 rounded-lg">
            <img
              className="rounded-full w-8 h-8"
              src="./avata.png"
              alt="CHACHINE.js"
            />
          </div>
        </Tooltip>
        {/* {isClicked.action && <Action/>}
        {isClicked.music && <Music/>}
        {isClicked.tv && <Tv/>} */}
      </div>
    </div>
  );
};
export default Navbar;

