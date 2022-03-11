import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

import { AiOutlineHome, AiOutlineLineChart } from "react-icons/ai";

import { IoIosRocket } from "react-icons/io";
import { BiLock, BiImageAdd } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiMagnifyingGlass } from "react-icons/gi";

import { BiSearch } from "react-icons/bi";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #0037c6;
  ${"" /* border-right: 1px solid rgba(131, 131, 131, 0.3); */}
  height: auto;
  z-index: 500000;
  position: relative;

  .main {
    z-index: 5000;
  }
  .sidebar-container {
    background: green;
  }
  .pro-sidebar {
    color: #ffd303;
    height: 100%;
    width: 210px;
    min-width: 210px;
    text-align: left;
    transition: width, left, right, 0.3s;
    position: relative;
    z-index: 1009;
    min-height: 790px;
    max-height: auto;
  }
  .pro-sidebar.collapsed {
    width: 57px;
    min-width: 57px;
  }
  .pro-sidebar > .pro-sidebar-inner {
    background: #0037c6;
  }
  .pro-inner-list-item {
    background: #0033b9 !important;
    padding: 0;
  }

  .pro-sidebar.collapsed
    .pro-menu
    > ul
    > .pro-menu-item.pro-sub-menu
    > .pro-inner-list-item
    > .popper-inner {
    display: none;
  }
  .pro-item-content {
    font-size: 15px !important;
  }
  .react-slidedown .pro-item-content {
    font-size: 13px !important;
  }
  .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout .pro-sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding-bottom: 10px;
  }
  .logo {
    width: 70px;
    height: 70px;
    margin-left: 15px;
  }
  .hide-logo {
    display: none;
    transition: 1s;
    height: 120px;
  }
  .pro-menu {
    padding: 0;
  }
  .pro-item-content {
    font-weight: normal;
    font-size: 22px;
    line-height: 45px;

    color: #c4d7f0;
  }
  .pro-icon-wrapper {
    background-color: transparent !important;
  }
  .pro-sidebar
    .pro-menu
    .pro-menu-item.pro-sub-menu
    > .pro-inner-item
    > .pro-arrow-wrapper
    .pro-arrow {
    border-style: inherit;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 10px solid #ffd303;
    transition: 0.3s;

    padding: 0;
    height: 100%;
  }
  .pro-arrow-wrapper {
    transition: 0.2s;
    top: 59% !important;
  }
  .open .pro-arrow-wrapper {
    transition: 0.3s;
    top: 37% !important;
  }
  .icon {
    font-size: 22px;
  }

  .input-container {
    display: none;

    align-items: center;
    padding: 0 14px;
    border-radius: 30px;
    background: #fff;
    width: 190px;
    margin: 10px;
    border: 0.03px solid rgba(131, 131, 131, 0.2);
  }
  .input-container input {
    border-radius: 30px;
    padding: 7px 0;
    border: 0;
    outline: 0;
    width: 100%;
    font-size: 15px;
    padding-left: 15px;
    color: #8b8b8b;
  }
  .search {
    color: #8190a6;
  }
  .search {
    cursor: pointer;
  }
  .pro-sidebar .pro-menu .pro-menu-item.active {
    background: #0158d3;
  }
  .pro-sidebar .pro-menu .pro-menu-item.active .pro-icon {
    color: #ffd303;
  }
  .pro-sidebar .pro-menu .pro-menu-item.active .pro-item-content {
    font-weight: 600;
    color: #ffd303;
  }
  .pro-sidebar
    .pro-menu
    > ul
    > .pro-sub-menu
    > .pro-inner-list-item
    > div
    > ul {
    padding: 0;
  }

  .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item {
    padding: 2px 22px 2px 20px;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 35px 8px 10px;
    cursor: pointer;
  }
  .pro-sidebar
    .pro-menu
    .pro-menu-item.pro-sub-menu
    .pro-inner-list-item
    .pro-inner-item {
    padding: 0px 0px 0px 30px;
  }
  .activate {
    color: green;
  }

  .pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item {
    padding: 0;
  }
  .pro-sub-menu .pro-menu-item .pro-inner-item .pro-item-content {
    padding-left: 30px;
  }
  @media only screen and (max-width: 991px) {
    .input-container {
      display: flex;
    }
    .input-container input {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 520px) {
    position: absolute;
    z-index: 10;
    .pro-sidebar.collapsed {
      width: 0;
      min-width: 0;
    }

    .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 8px 35px 8px 10px;
      cursor: pointer;
    }
    border: none;
  }
`;

const Sidebar = ({ collapsed, setCollapsed }) => {
  useEffect(() => {
    if (window.innerWidth < 575) {
      setCollapsed(true);
    }
  }, []);

  const setActive = (e) => {
    const allItem = document.querySelectorAll(".pro-menu-item");
    const allIcon = document.querySelectorAll(".pro-icon");

    allItem.forEach((el) => {
      el.querySelector(".pro-item-content").style.color = "#fff";
      el.style.background = "none";
    });
    allIcon.forEach((el) => (el.style.color = "#fff"));
    e.target.closest(".pro-item-content").style.color = "#FFD303";
    e.target.closest(".pro-menu-item").querySelector(".pro-icon").style.color =
      "#FFD303";
    e.target.closest(".pro-menu-item").style.background = "#0158d3";
  };
  const setActiveSubMenu = (e) => {
    const allItem = document.querySelectorAll(".pro-menu-item");
    const allIcon = document.querySelectorAll(".pro-icon");

    allItem.forEach((el) => {
      el.querySelector(".pro-item-content").style.color = "#fff";
      el.style.background = "none";
    });
    allIcon.forEach((el) => (el.style.color = "#fff"));
    // e.target.closest(".pro-item-content").style.color = "#FFD303";

    e.target.closest(".pro-menu-item").style.background = "#0158d3";
  };
  return (
    <Wrapper>
      <div className={!collapsed && "main"}>
        {" "}
        <ProSidebar collapsed={collapsed}>
          {/* <SidebarHeader style={{ height: collapsed && "100px" }}>
        
        </SidebarHeader> */}

          {!collapsed && (
            <div className="input-container">
              <BiSearch className="search" />
              <input type="text" placeholder="Search token" />
            </div>
          )}
          <Menu iconShape="square">
            <MenuItem
              icon={<AiOutlineHome className="icon" />}
              onClick={setActive}
              active={true}
            >
              Homepage
              <NavLink to="/"></NavLink>
            </MenuItem>

            <MenuItem icon={<AiOutlineLineChart className="icon" />}>
              DeFi Exchange
              <NavLink to="/difiexchange" onClick={setActive}></NavLink>
            </MenuItem>
            {/* <MenuItem icon={<BiUpvote className="icon" />}>Voting </MenuItem> */}

            <SubMenu
              title="Launchpad"
              icon={<IoIosRocket className="icon" />}
              // onClick={(e) => {
              //   setActiveSubMenu(e);
              // }}
            >
              <MenuItem onClick={setActiveSubMenu}>
                Create Launchpad <NavLink to="/createlauncpad"></NavLink>
              </MenuItem>
              <MenuItem onClick={setActiveSubMenu}>
                Launchpad Dashboard <NavLink to="/launchpaddashboard"></NavLink>
              </MenuItem>
              {/* <MenuItem onClick={setActiveSubMenu}>
              Manage Launchpad <NavLink to="/managelaunchpad"></NavLink>{" "}
            </MenuItem> */}
              <MenuItem onClick={setActiveSubMenu}>
                Manage Presale <NavLink to="/managepresale"></NavLink>{" "}
              </MenuItem>
            </SubMenu>

            <SubMenu
              title="Lockers"
              icon={<BiLock className="icon" />}
              // onClick={(e) => {
              //   setActiveSubMenu(e);
              // }}
            >
              <MenuItem onClick={setActiveSubMenu}>
                Create Lock
                <NavLink to="/lockerstoken" />{" "}
              </MenuItem>
              <MenuItem onClick={setActiveSubMenu}>
                Liquidity
                <NavLink to="tokenlocker" />{" "}
              </MenuItem>

              <MenuItem onClick={setActiveSubMenu}>
                Token <NavLink to="/token"></NavLink>
              </MenuItem>
            </SubMenu>

            <MenuItem icon={<RiMoneyDollarBoxLine className="icon" />}>
              Stake <NavLink to="/stake" onClick={setActive}></NavLink>
            </MenuItem>
            <MenuItem icon={<GiMagnifyingGlass className="icon" />}>
              Scan
              <NavLink to="/scan" onClick={setActive}></NavLink>
            </MenuItem>
            <MenuItem icon={<BiImageAdd className="icon" />}>
              NFT Mint
              <NavLink
                to="/mint"
                onClick={setActive}
                className={(el) => (el.isActive ? "activate" : "")}
              ></NavLink>
            </MenuItem>
            {/* <MenuItem icon={<BsShop className="icon" />}>
            NFT Marketplace{" "}
          </MenuItem> */}
          </Menu>
        </ProSidebar>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
