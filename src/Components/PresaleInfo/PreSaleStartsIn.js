import React, { useState } from "react";
import styled from "styled-components";

import MyCountDown from "../MyCountDown/MyCountDown";
import { BsCheck } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import Heart from "react-animated-heart";

const Wrapper = styled.div`
  font-family: "Open Sans";
  padding: 18px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 15px;
  height: 37%;

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c4d7f0;
  }
  .startText {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    /* 2 */

    color: #3d3d3d;
  }
  .startNumber {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #5e9cf3;
  }
  .body img {
    width: 29px;
    height: 29px;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    display: flex;
    align-items: center;
    padding-left: 10px;
    margin: 0;

    /* 1 */

    color: #1e1e1e;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 141%;
    display: block;
    margin-top: 15px;
    /* or 20px */

    /* 2 */

    color: #3d3d3d;
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 8px;

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

    border-radius: 7.5px;
  }
  .heart-relative {
    position: relative;
  }
  .heart-container {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #ff2c2c;
    color: #ff2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .heart {
    position: absolute;
    top: -39px;
    right: -38px;
  }
  @media only screen and (max-width: 1260px) {
    .body img {
      width: 25px;
      height: 25px;
    }
    .title {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 1199px) {
    height: 36%;
    .body img {
      width: 29px;
      height: 29px;
    }
    .title {
      font-size: 18px;
    }
  }
  }
  @media only screen and (max-width: 991px) {
    height: 39%;
    .body img {
      width: 23px;
      height: 23px;
    }
    .title {
      font-size: 13px;
      padding-left:5px;
    }
    .status{
      padding:3px 4px;
      font-size:8px;
    }
    .heart {
      right:-42px;
    }
  }
  }
`;

const PreSaleStartsIn = ({preSaledate}) => {
  const [isClick, setClick] = useState(false);
  const [currentTime, setcurrentTime] = useState(new Date().getTime());

  return (
    <Wrapper>
      <div className="startInContainer">
        <div className="header py-1">
          <span className="startText">Presale starts in</span>
          <span className="startNumber">
            {preSaledate*1000 - currentTime > 0 ?
            <MyCountDown timeCount={preSaledate} withUnix={true} />
            :
            preSaledate != 0
            &&
            `Presale Already Started`
            }
          </span>
        </div>

        <div className="body py-3">
          <div className="d-flex justify-content-between  heart-relative">
            <div className="d-flex align-items-center ">
              <img src="./images/presaleInfoLogo.svg" alt="#" />
              <p className="title">ApeLab</p>
              <div
                className="status d-flex align-items-center"
                style={{
                  background: "#C4D7F0",
                  borderRadius: "14px",
                  color: "#0158D3",
                }}
              >
                <BsCheck size={12} />
                Audit
              </div>
              <div
                className="status d-flex align-items-center"
                style={{
                  background: " #CDFFDE",
                  borderRadius: "14px",
                  color: "#3BB464",
                }}
              >
                <BsCheck size={12} />
                Sale Live
              </div>
            </div>{" "}
            <div className="heart">
              <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            </div>
          </div>
          <span className="text ">
            Lorem Ipsum is simply dummy text of the printing Lo rem Ipsum is
            simply dummy text of the print ing Lor em Ipsum is .Lorem Ipsum is
            simply dummy te xt of the printing Lorem Ipsum is simply dummy text
            of the printingLorem Ipsum is{" "}
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
export default PreSaleStartsIn;
