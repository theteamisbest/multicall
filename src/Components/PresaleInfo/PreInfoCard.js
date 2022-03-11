import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;

  border-radius: 15px;
  font-family: "Open Sans";
  height: 100%;
  a {
    text-decoration: none;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    /* 1 */

    color: #1e1e1e;
    border-radius: 2.5px;
    padding-top: 6px;
    padding-bottom: 14px;
  }
  .name-number-container {
    border-top: 0.5px solid #e8ecf1;
  }
  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    /* 1 */

    color: #1e1e1e;
  }
  .warning {
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 11px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #f40606;
  }
  .number {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 10px;

    /* 1 */

    color: #1e1e1e;
  }
  .address-name {
    color: #1e1e1e;
  }
  .address-number {
    color: #0158d3;
  }
  @media only screen and (max-width: 1199px) {
    height: 100%;
    .title {
      padding-top: 8px;
      padding-bottom: 18px;
    }
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    margin-bottom: 18px;
  }
`;

const PreInfoCard = ({preSaleinfoArray,tokenAddress,presaleAddress}) => {
 
  return (
    <Wrapper className=" ">
      <div className="title ">Presale Information</div>
      <div className="preInfoCard">
        <div className="d-flex justify-content-between py-2 name-number-container">
          <div className="d-flex flex-column">
            <span className="name  address-name "> Token Address</span>
            <span className="warning">
              Do not send funds direct to token address!
            </span>
          </div>
          <a href="/" target="_blank">
            <span className="number address-number">{tokenAddress === null?'..........':tokenAddress}</span>
          </a>
        </div>

        <div className="d-flex justify-content-between align-items-center py-2 name-number-container">
          <span className="name address-name">Presale Address</span>
          <a href="/" target="_blank">
            <span className="number address-number">{presaleAddress === null?'..........':presaleAddress}</span>
          </a>
        </div>

        <div className="d-flex justify-content-between align-items-center py-2 name-number-container">
          <span className="name">Listing on</span>
          <div className="">
            <a href="/" target="_blank" className="d-flex">
              <img src="./images/Pancakeswap.svg" alt="" className="mx-2" />

              <span className="number">Pancakeswap</span>
            </a>
          </div>
        </div>

        {preSaleinfoArray && preSaleinfoArray.map((el, i) => (
          <div className="d-flex justify-content-between align-items-center py-2 name-number-container">
            <span className="name">{el.name}</span>
            <span className="number">{el.number}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default PreInfoCard;
