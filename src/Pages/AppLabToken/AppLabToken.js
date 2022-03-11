import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import MostViewed from "../../Components/DifiChange/MostViewed";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MyCountDown from "../../Components/MyCountDown/MyCountDown";

const Wrapper = styled.div`
  height: 100%;
  margin: 15px 0;
  .name {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    text-align: center;
    padding-top: 30px;

    /* 1 */

    color: #1e1e1e;
  }
  .main-container {
    padding: 30px;
    background: #ffffff;
    border-radius: 15px;
  }
  .main {
    position: relative;
    background: #ffffff;
    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
  }
  .lock {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .back {
    color: #0037c6;
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 30px;
    cursor: pointer;
  }
  .token-details {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height */
  }
  .button {
    font-family: "Open Sans", sans-serif;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.02);
    border-radius: 23.5px;
    outline: none;
    border: none;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    width: 163px;
    color: #0158d3;
    margin: 4px 4px;

    outline: none;
    focus: none;
    padding: 6px 25px;

    border: 1px solid #0158d3;
    background: #fff;
    color: #0158d3;
  }
  .button:focus {
    outline: none;
    box-shadow: none;
  }
  .buttons {
    font-family: "Open Sans", sans-serif;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.02);
    border-radius: 23.5px;
    outline: none;
    border: none;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #0158d3;
    margin: 0px 2px;

    outline: none;
    focus: none;
    padding: 4px 10px;

    border: 1px solid #0158d3;
    background: #fff;
    color: #0158d3;
  }
  .buttons:focus {
    outline: none;
    box-shadow: none;
  }
  .active {
    background: linear-gradient(180deg, #5e9cf3 0%, #0158d3 100%);
    color: #fff;
    border: none;
  }
  @media only screen and (max-width: 767px) {
    .main-container {
      padding: 15px;
    }
    .token-details {
      font-size: 13px;
      line-height: 22px;
    }
    .lock {
      width: 30px;
    }
    .buttons {
      font-size: 8px;
      padidng: 0 2px;
    }
  }
`;

const AppLabToken = () => {
  const navigate = useNavigate();

  const tokenArray = [
    { title: "Token Name", details: "ApeLab" },
    { title: "Token Address", details: "0x5466734....374p" },
    { title: "Owner Address", details: "0x5466734....3742d" },
    { title: "Amount of Tokens Locked", details: "50000000000" },
    { title: "Unlock Date/Time", details: "01/02/2022-20:00PM" },
    {
      title: "Unlock in ",
      details: <MyCountDown dayCount="Feb 05, 2022 20:00:00 " />,
    },
    { title: "Rewards earned during Lock", details: "6579.00" },
    { title: "Token Name", details: "ApeLab" },
  ];
  const mostViewedArray = [
    {
      title: "HOT PAIRS",
      icon: "./images/mostviewed.svg",
      icon2: "./images/hotpairs.svg",
    },
    {
      title: "#1 GODZ",
      icon: "./images/2.svg",
    },
    {
      title: "#2 ELMON",
      icon: "./images/3.svg",
    },
    {
      title: "#3 ETERNAL",
      icon: "./images/4.svg",
    },
    {
      title: "#4 KGT",
      icon: "./images/5.svg",
    },
    {
      title: "#5 SCAR",
      icon: "./images/6.svg",
    },
    {
      title: "#6 GOLD",
      icon: "./images/7.svg",
    },
    {
      title: "#7 RACA",
      icon: "./images/8.svg",
    },
    {
      title: "#8 SAR",
      icon: "./images/9.svg",
    },
  ];
  const setActive = (e) => {
    const allButton = document.querySelectorAll(".button");

    allButton.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };
  const setActives = (e) => {
    const allButton = document.querySelectorAll(".buttons");

    allButton.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <Wrapper>
      <MostViewed mostViewedArray={[...mostViewedArray]} title="HOT PAIRS" />
      <Col sm={11} className="mx-auto main-container my-4">
        <Col sm={11} className=" main p-4 mx-auto  ">
          <IoIosArrowBack
            className="back"
            onClick={() => navigate("/tokenlocker")}
          />
          <img src="./images/backgroundLock.svg" alt="lock" className="lock " />
          <div className="text-center">
            <img src="./images/profile1.svg" alt="profile" />
            <div className="name d-flex justify-content-center ">
              Apelab Token
            </div>
          </div>
          <Col className="py-2">
            <hr />
            {tokenArray.map((el, i) => (
              <>
                <div
                  key={i}
                  className="d-flex justify-content-between  token-details"
                >
                  <span>{el.title}</span>
                  <span style={{ paddingLeft: "6px" }}>{el.details}</span>
                </div>
                <hr />
              </>
            ))}
            <div className="d-flex justify-content-between align-items-center  token-details">
              <span>Lock Further</span>
              <span
                style={{ paddingLeft: "3px" }}
                className="d-flex align-items-center"
              >
                {" "}
                <button className="buttons" onClick={setActives}>
                  30 Days
                </button>
                <button className="buttons" onClick={setActives}>
                  1 Year
                </button>
              </span>
            </div>
            <hr />
          </Col>
          <div className="d-flex justify-content-center flex-column flex-sm-row align-items-center">
            <button className="button active" onClick={setActive}>
              Unlock
            </button>
            <button className="button" onClick={setActive}>
              Withdraw Rewards
            </button>
          </div>
        </Col>
      </Col>
    </Wrapper>
  );
};
export default AppLabToken;
