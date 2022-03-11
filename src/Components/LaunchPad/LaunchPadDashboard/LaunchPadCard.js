import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

import { ProgressBar } from "react-bootstrap";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

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
  .top-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 15px;

    font-size: 9px;
    line-height: 11px;
    display: flex;
    align-items: center;
    color: #9f8546;
    text-transform: capitalize;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    background: #cdffde;
    /* identical to box height */

    display: flex;
    margin: 0 3px;

    margin-bottom: 5px;
    border-radius: 7.5px;
  }
  .upcoming {
    background: #fffbd2;
  }
  .upcoming .dot {
    background: #ffd303;
  }
  .cancelled {
    background: #ffd2d2;
  }
  .cancelled .dot {
    background: #ff7b5e;
  }
  .sale {
    background: #cdffde;
    color: #3bb464;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: #ff7b5e;
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;
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
    height: 35px;
  }
  .bnb {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #7a7979;
  }
  .type {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    /* 1 */

    color: #1e1e1e;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .frombnb {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-transform: uppercase;

    /* 4 */

    color: #2f88ff;
  }
  .from-last-bnb {
    padding-bottom: 15px;
  }
  .progress-title {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #1e1e1e;
    padding: 5px 0;
  }
  ${"" /* progressbar */}
  .progress {
    background: #e1edff;
    border-radius: 5.5px;
    height: 8px;
    margin: 8px 0;
  }
  .progress-bar {
    background: #ffd303;
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

    color: #7a7979;
  }
  a {
    text-decoration: none;
  }
`;

const LaunchPadCard = (props) => {
  const {
    preAddress,
    status,
    audit,
    profile,
    name,
    bnb,
    frombnb,
    tobnb,
    progress,
    liquidity,
    lockupTime,
    time,
    minCon,
    maxCon
  } = props;
  // countdownTimeDate

  const endTime = time * 1000;
  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  // lock 
  const lockDays = Math.floor((lockupTime*1000 - currentTime )/ (60*60*24*1000));
  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
  }, [currentTime]); // 11:30:55

  return (
    <Wrapper>
      <Link to={`/presaleinfo/${preAddress}`}>
        <div className="card-container">
          <div className="top-content">
            <div className="status-container d-flex justify-content-center align-items-center">
              {audit && (
                <div
                  className={`status ${status}`}
                  style={{
                    background: "#C4D7F0",
                    borderRadius: "14px",
                    color: "#0158D3",
                  }}
                >
                  {" "}
                  {audit}
                </div>
              )}
              <div className={`status ${status}`}>
                {status === "sale live" ? (
                  <FiCheck
                    color="#3BB464"
                    size={12}
                    style={{ marginRight: "3px" }}
                  />
                ) : (
                  <span className="dot"></span>
                )}
                {status}
              </div>
            </div>
            <img src={profile} alt="ProfilePicture" className="my-1" />
            <p className="name">{name}</p>
            {/* <span className="bnb my-2">1 BNB = {bnb} DOGI</span> */}
            <span className="type">Soft/HaRD Cap:</span>
            <span className="frombnb my-2">
              {frombnb} BNB - {tobnb} BNB
            </span>
          </div>
          <div className="line" style={{ opacity: ".4" }}></div>
          <span className="progress-title">Progress ({progress}.00%)</span>

          <ProgressBar now={progress} />
          <div className="bottom-content">
            <div className="flex-container">
              <span className="bnb-last from-last-bnb">{minCon} BNB</span>

              <span className="bnb-last from-last-bnb">{maxCon} BNB</span>
            </div>
            <div className="flex-container">
              <span className="liquidity ">Liquidity%</span>
              <span className="liquidity bnb-last">{liquidity}%</span>
            </div>
            <div className="flex-container py-2">
              <span className="liquidity ">Lockup Time</span>
              <span className="liquidity bnb-last">{lockDays} days</span>
            </div>
            <div className="line"></div>
            <div className="flex-container">
              <span className="bnb-last">Sale Starts in:</span>
              <span className="liquidity">{`${day < 10 ? "0" + day : day}:${
                hour < 10 ? "0" + hour : hour
              }:${minute < 10 ? "0" + minute : minute}:${
                second < 10 ? "0" + second : second
              }`}</span>
            </div>
          </div>
          <Button color="#3C8BF7">ViewPresale</Button>
        </div>
      </Link>
    </Wrapper>
  );
};
export default LaunchPadCard;
