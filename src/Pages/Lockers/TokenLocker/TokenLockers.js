import React from "react";
import styled from "styled-components";
import TokenLockerCard from "./TokenLockersCard";
import { Row, Col } from "react-bootstrap";
import MostViewed from "../../../Components/DifiChange/MostViewed";
import Button from "../../../Components/Button/Button";
import { FiSearch } from "react-icons/fi";

const Wrapper = styled.div`
  font-family: "Open Sans";
  height: 100% !important;
  .header {
    background: #fff;
    border-radius: 11px;
    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.08);
  }
  .main {
    background: #fff;
    border-radius: 11px;
    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.08);
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #002861;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #3d3d3d;
  }
  .main-search {
    padding-bottom: 20px;
  }
  .searchInput {
    background: #f1f5fb;
    border: 1px solid #b8cce9;
    box-sizing: border-box;
    border-radius: 19.5px;

    width: 70%;
    padding: 0 18px;
    margin-right: 8px;
    color: #8b8b8b;
    font-size: 13px;
    display: block;
    outline: none;
    display: flex;
    align-items: center;
  }
  .input {
    padding: 8px 5px;
    display: block;
    width: 100%;
    border: 0;
    background: #f1f5fb;
    padding-left: 15px;

    box-sizing: border-box;
    border-radius: 19.5px;
    outline: none;
  }
  @media only screen and (max-width: 767px) {
    .tagline {
      font-size: 14px;
    }
    .searchInput {
      margin-bottom: 6px;
      width: 100%;
    }
  }
`;

const TokenLocker = ({ collapsed, title }) => {
  const TokenLockersCardArray = [
    {
      profile: "./images/profile1.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/locker2.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/locker3.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/profile6.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/profile8.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/locker6.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/locker7.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
    {
      profile: "./images/locker8.svg",
      name: "DOGO INU",
      unlockdatetime: "01/01/2022 08:00",
      owneraddress: "0xf63535474y56",

      time: 5,
    },
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
  return (
    <Wrapper>
      <MostViewed mostViewedArray={[...mostViewedArray]} title="HOT PAIRS" />
      <Col xs={11} className="mx-auto">
        <div className="d-flex justify-content-center align-items-center flex-column text-center header py-4 my-3">
          <img src="./images/color-lock.svg" alt="lock" />
          <h5 className="title py-2">{title}</h5>

          <span className="tagline py-0">
            Lock your tokens with apelock and earn/withdraw rewards whilst
            locked
          </span>
        </div>
        <div className="main py-4 px-3">
          <Col
            md={11}
            lg={8}
            xxl={6}
            className="mx-auto d-flex justify-content-center align-items-center flex-column flex-md-row main-search"
          >
            <div className="searchInput">
              <FiSearch size={16} />
              <input
                type="text"
                className="input"
                placeholder="Enter token address to view lock"
              />
            </div>

            <Button
              background="linear-gradient(180deg, #5E9CF3 0%, #0158D3 100%)"
              color="#fff"
              padding="13px 18px"
              margin="0"
              fontSize="13px"
            >
              Manage Lock
            </Button>
          </Col>
          <Row>
            {TokenLockersCardArray.map((el, i) => (
              <Col
                sm={collapsed ? 6 : 12}
                md={collapsed ? 4 : 6}
                lg={collapsed ? 3 : 4}
                xl={3}
                xxl={3}
                key={i}
                className=""
              >
                {" "}
                <TokenLockerCard {...el} />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Wrapper>
  );
};
export default TokenLocker;
