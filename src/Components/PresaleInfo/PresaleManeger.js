import React from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import RegisterInterest from "../RegisTerInterest/RegisTerInteres";
const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 53%;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    color: #1e1e1e;
  }
  .tagline {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 141%;
    color: #3d3d3d;
    padding-top: 15px;
  }
  .progress-title {
    text-align: center;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #2f88ff;
    display: flex;
    justify-content: center;
  }
  .progress {
    background: #e1edff;
    border-radius: 5.5px;
    height: 8px;
    margin: 8px 0;
  }
  .progress-bar {
    background: #ffd303;
  }
  .bnb {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* 2 */

    color: #3d3d3d;
  }
`;

const PresaleManeger = ({tokenDetails}) => {
  //   const setActive = (e) => {
  //     const allButton = document.querySelectorAll(".button");

  //     allButton.forEach((el) => el.classList.remove("active"));
  //     e.target.classList.add("active");
  //   };
  return (
    <>
      <Wrapper>
        <p className="title">Presale Manager</p>
        <p className="tagline text-center">
          Update,Deposit and manage presale with ease
        </p>
        <div className="py-3">
          {" "}
          <div className="progress-title">{tokenDetails.weiRaised}/{tokenDetails.maxContribution}</div>
          <ProgressBar now={tokenDetails.weiRaised} />
          <div className="d-flex justify-content-between align-items-center">
            <span className="bnb">{(tokenDetails.weiRaised/tokenDetails.maxContribution)*100} BNB</span>{" "}
            <span className="bnb">{tokenDetails.maxContribution} BNB</span>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default PresaleManeger;
