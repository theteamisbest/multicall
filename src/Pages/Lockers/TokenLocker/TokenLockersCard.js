import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import TimeCounter from "../../../Components/TimeCounter/TimeCounter";
const Wrapper = styled.div`
  font-family: "Open Sans";
  background: #ffffff;
  box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 15px;
  margin: 12px 0;
  :hover {
    transform: translateY(-5px);
  }
  a {
    text-decoration: none;
  }
  .top-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .name {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #1e1e1e;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .line {
    background: #b8cce9;
    border-radius: 2.5px;
    height: 1px;
    width: 100%;
    margin: 7px 0 10px 0;
  }
  .liquidity {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
  }
  .bnb-last {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #002861;
  }
`;

const TokenLockerCard = (props) => {
  const {
    profile,
    name,

    unlockdatetime,

    owneraddress,
    time,
  } = props;

  return (
    <Wrapper>
      <Link to="/applabtocken">
        <div className="card-container">
          <div className="top-content">
            <img src={profile} alt="ProfilePicture" className="my-1" />
            <p className="name">{name}</p>
          </div>
          <div className="line" style={{ opacity: ".4" }}></div>

          <div className="bottom-content">
            <div className="flex-container py-2">
              <span className="liquidity ">Unlock Date/Time</span>
              <span className="liquidity bnb-last"> {unlockdatetime}</span>
            </div>
            <div className="flex-container py-2">
              <span className="liquidity ">Owner Address</span>
              <span className="liquidity bnb-last"> {owneraddress}</span>
            </div>
            <div className="line"></div>
            <div className="flex-container">
              <span className="bnb-last">Unlocks in:</span>
              <span className="liquidity">{<TimeCounter time={time} />}</span>
            </div>
          </div>
          <Button
            background="linear-gradient(180deg, #5E9CF3 0%, #0158D3 100%)"
            color="#fff"
          >
            ViewLock
          </Button>
        </div>
      </Link>
    </Wrapper>
  );
};
export default TokenLockerCard;
