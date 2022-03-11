import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";

import Navbar from "./Components/Navbar/Navbar";
import LearnHow from "./Components/LearnHow/LearnHow";
import Sidebar from "./Components/Sidebar/Sidebar";
import MintPage from "./Pages/MintPage";
import DifiChange from "./Pages/DifiChangePage";
import Stake from "./Pages/Stake";
import LockesAndToken from "./Pages/Lockers/Token";
import { Routes, Route } from "react-router-dom";
import CreatePresale from "./Pages/Lockers/CreatePresale/CreatePresale";
import CreateNow from "./Pages/Lockers/CreatePresale/CreateInfo/CreateNow";
import styled from "styled-components";
import LaunchPadDashboard from "./Components/LaunchPad/LaunchPadDashboard/LaunchPadDashboard";
import TokenLocker from "./Pages/Lockers/TokenLocker/TokenLockers";
import AppLabToken from "./Pages/AppLabToken/AppLabToken";
import PreSaleInfoPage from "./Pages/PreSaleInfoPage";
import Scan from "./Pages/Scan";

import ManagePresale from "./Pages/ManagePreSales";
import RegisterInterest from "./Components/RegisTerInterest/RegisTerInteres";

import Web3 from "web3";




const Wrapper = styled.div`
  .wrapper {
    display: flex;
  }
  .sidebar-container {
    background: #0037c6 !important;
  }
  .left-container {
    scrollbar-width: none; /* for Firefox */

    background: #e5e5e5;
    min-height: 790px;
  }
  .left-container ::-webkit-scrollbar {
    width: 0px;
  }
  @media only screen and (max-width: 520px) {
    .overlay {
      position: fixed;
      width: 100vh;
      min-height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      cursor: pointer;
    }
  }
`;
function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Wrapper>
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="wrapper">
        {" "}
        <div
          className="sidebar-container"
          style={{
            height: "100vh",
          }}
        >
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <div
          className="w-100 left-container"
          style={{
            background: "#FAFAFA",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <LearnHow collapsed={collapsed} />
          <div>
            <Routes>
              <Route path="/" element={<Home collapsed={collapsed} />}></Route>

              <Route
                path="/mint"
                element={<MintPage collapsed={collapsed} />}
              ></Route>
              <Route
                path="/difiexchange"
                element={<DifiChange collapsed={collapsed} />}
              ></Route>
              <Route
                path="/stake"
                element={<Stake collapsed={collapsed} />}
              ></Route>
              <Route
                path="/launchpaddashboard"
                element={<LaunchPadDashboard collapsed={collapsed} />}
              ></Route>
              <Route
                path="/presaleinfo/:address"
                element={<PreSaleInfoPage collapsed={collapsed} />}
              ></Route>
              <Route
                path="/managepresale"
                element={<ManagePresale collapsed={collapsed} />}
              ></Route>

              <Route
                path="/tokenlocker"
                element={
                  <TokenLocker
                    collapsed={collapsed}
                    title="View Liquidity Lockers"
                  />
                }
              ></Route>
              <Route
                path="/token"
                element={
                  <TokenLocker
                    collapsed={collapsed}
                    title="View Token Lockers"
                  />
                }
              ></Route>
              <Route
                path="/lockerstoken"
                element={<LockesAndToken collapsed={collapsed} />}
              ></Route>
              <Route
                path="/createlauncpad"
                element={<CreatePresale collapsed={collapsed} />}
              ></Route>
              <Route
                path="createlauncpad/createnow"
                element={<CreateNow collapsed={collapsed} />}
              ></Route>
              <Route
                path="applabtocken"
                element={<AppLabToken collapsed={collapsed} />}
              ></Route>
              <Route
                path="scan"
                element={<Scan collapsed={collapsed} />}
              ></Route>
            </Routes>
          </div>
        </div>
        <div
          className={!collapsed && "overlay"}
          onClick={() => setCollapsed(true)}
        ></div>
      </div>
    </Wrapper>
  );
}

export default App;
