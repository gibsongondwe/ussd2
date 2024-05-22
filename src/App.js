import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
 import { FiSettings } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useStateContext } from "./context/ContextProvider";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Managesubscribers from "./pages/Managesubscribers";
import Sendsms from "./pages/Sendsms";
import Managegrupe from "./pages/Managegrupe";
import Flexsms from "./pages/Flexsms";

function App() {
  const { activeMenu } = useStateContext();

  return (
    <dive>
      <BrowserRouter>
        <div className="flex relative dark:bg-black">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <Tooltip title="Setting" placement="top">
              <button
                type="button"
                className="text-3x1 p-3 hover:drop-shadow-xl hover:bg-gray-300 text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                 <FiSettings /> 
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed dark:bg-gray-100">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-slate-400">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-slate-50 bg-white 
            min-h-screen  w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div
              className="fixed md:static
            bg-white dark:to-black w-full"
            >
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashbold */}
                <Route path="/" element={<Home/>} />
                <Route path="/sendsms" element={<Sendsms/>} />
                <Route path="/managegroupe" element={<Managegrupe/>} />
                <Route path="/managesubscriber" element={<Managesubscribers/>} />
                <Route path="/chart" element={<Chart/>} />
                <Route path="/flexsms" element={<Flexsms/>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </dive>
  );
}

export default App;
