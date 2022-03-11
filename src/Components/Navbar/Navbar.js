import React from "react";
import styled from "styled-components";

import { BiSearch } from "react-icons/bi";

import MySelect from "../Select/Select";
import network from "../../images/network.svg";
import metamask from "../../images/metamask.svg";
import hamburgerss from "../../images/hamburger.svg";
import logo from "../../images/logo.svg";
import logo2 from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Wrapper = styled.div`
  height: 60px;
  background: #fff;

  ${"" /* background: rgba(1, 88, 211, 0.04); */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  box-shadow: 0 0 2px 0px #838383;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.05);
  .logoAndHamburger {
    ${"" /* background: #0037c6; */}
    width: 210px;
    min-width: 210px;
    padding-left: 16px;
    height: 60px;
    transition: width, left, right, 0.3s;
  }
  .logoAndHamburgerwidth {
    background: #0037c6;
    width: 57px;
    min-width: 57px;
    padding-left: 16px;
    height: 60px;
    transition: width, left, right, 0.3s;
  }
  .input-container {
    display: flex;

    align-items: center;
    padding: 0 14px;
    border-radius: 30px;
    background: #fff;
    width: 250px;
    border: 0.03px solid rgba(131, 131, 131, 0.2);
    margin-left: 8px;
  }
  .input-container input {
    font-family: "Open Sans", sans-serif;
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
    cursor: pointer;
    font-size: 20px;
    color: #8190a6;
  }

  .select-container {
    display: flex;
  }
  .logo {
    width: 70px;
    height: 70px;
    margin-left: 15px;
    transition: width, left, right, 0.3s;
  }
  .hide-logo {
    display: none;
    transition: 1s;
    height: 120px;
  }
  @media only screen and (max-width: 1199px) {
    .input-container {
      width: 250px;
    }
    .input-container input {
      padding: 8px 0;
    }
  }

  @media only screen and (max-width: 991px) {
    .logo {
      display: block;
    }
    .input-container {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    .logoAndHamburger {
      width: 130px;
      min-width: 130px;
    }
  }
`;

const Navbar = ({ collapsed, setCollapsed }) => {
  const networkSelect = ["First Sample", "Second Sample"];
  const metaMask = ["MetaMask", "Wallet Connect"];
  return (
    <>
      <Wrapper className="d-flex">
        {/* <img
          src={hamburgerss}
          onClick={() => setCollapsed((prev) => !prev)}
          size="22px"
          color="#707070"
         
          alt="#"
        /> */}
        <div className="d-flex align-items-center">
          <div className="logoAndHamburger d-flex align-items-center">
            <GiHamburgerMenu
              size={25}
              color="#000"
              onClick={() => setCollapsed((prev) => !prev)}
              style={{ cursor: "pointer" }}
            />

            <img
              src={logo2}
              alt=""
              className={!collapsed ? "logo  " : "logo "}
            />
          </div>
          {/* <img
            src={logo2}
            alt=""
            className={!collapsed ? "logo d-none " : "logo d-block "}
          /> */}
          <div className="input-container">
            <BiSearch className="search" />
            <input type="text" placeholder="Search token" />
          </div>
        </div>

        <div className="select-container">
          {" "}
          <MySelect isWallet={false}
            selectArray={networkSelect}
            initialValue="Switch Network"
            image={network}
          />
          <MySelect isWallet={true} selectArray={metaMask} image={metamask} />
        </div>
      </Wrapper>
      {/* <Wrapper
        className="d-lg-none"
        style={{ justifyContent: !collapsed && "flex-end" }}
      >
        {collapsed && <img src="./images/logo.svg" alt="" className="logo" />}
        <div className="input-container">
          <input type="text" placeholder="Search token" />
          <BiSearch className="search" />
        </div>
        <div className="select-container">
          {" "}
          <MySelect
            selectArray={networkSelect}
            initialValue="Switch Network"
            image={network}
          />
          <MySelect selectArray={metaMask} image="./images/metamask.svg" />
        </div>
      </Wrapper> */}
    </>
  );
};
export default Navbar;
