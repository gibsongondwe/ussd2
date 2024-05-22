
import { Tooltip } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { GoVideo } from "react-icons/go";
import { LiaTvSolid } from "react-icons/lia";
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { FiSend } from "react-icons/fi";
import { MdGroup } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaSubscript } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";


const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-300  m - 2';
  return (
    <div className=' h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-slate-100 '>
      <div>
    
        
        {activeMenu && (<>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={handleCloseSideBar} className='items-center 
            gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900
            '>
              <h1>
                SMS ALET
             </h1>
            </Link>
      <Tooltip  title="Menu" placement="bottom">
              <button type="button" onClick={() =>setActiveMenu((prevActiveMenu)=> !prevActiveMenu) }
                 className="text-xl rounded-full p-3 hover:bg-gray-300 mt-4 block text-gray-600">  
               
                <MdOutlineCancel/>
          </button>
      </Tooltip>
          </div>
          <div className="mt-10 text-gray-400 m-3 flex flex-col space-y-6">
          <Link to="/sendsms" className={({isActive})=>isActive ? activeLink : normalLink} >
            <button  className="flex items-center gap-5 pl-4 pr-4  pt-3 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200   m - 2 "><FiSend /> Send</button>
            </Link>
            <Link to="/managegroupe" className={({isActive})=>isActive ? activeLink : normalLink}   >
             <button  className="flex items-center gap-5 pl-4 pr-4  pt-3 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200   m - 2"><MdGroup />Manage group</button>
            </Link>
           
            <Link to="/managesubscriber" className={({isActive})=>isActive ? activeLink : normalLink} >
            <button  className="flex items-center gap-5 pl-4 pr-4  pt-3 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200   m - 2"><FaUser/>Manage subscribers</button>
            </Link>
            <Link to="/chart" className={({isActive})=>isActive ? activeLink : normalLink} >
            <button  className="flex items-center gap-5 pl-4 pr-4  pt-3 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200   m - 2"><FaChartArea  />Chart</button>
            </Link>
            <Link to="/flexsms" className={({isActive})=>isActive ? activeLink : normalLink} >
            <button  className="flex items-center gap-5 pl-4 pr-4  pt-3 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200   m - 2"><FaEnvelope/>Flex sms</button>
            </Link>
            
          </div>
        </>)

        }
      </div>
      </div> 
  )
}

export default Sidebar

