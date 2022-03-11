import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 100%;
  .deposit {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #0158d3;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 141%;
    color: #3d3d3d;
  }
  .warning {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 141%;

    color: #ff0000;
  }
  .button-container {
    dispaly: flex;
    justify-content: flex-end;
    padding-left: 10px;
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
    color: #0158d3;
    margin: 0 4px;
    outline: none;
    focus: none;
    border: 1px solid #0158d3;
    background: #fff;
    color: #0158d3;
    padding: 8px 15px;
    width: 135px;
  }
  .button:focus {
    outline: none;
    box-shadow: none;
  }
  .active {
    background: linear-gradient(180deg, #5e9cf3 0%, #0158d3 100%);
    color: #fff;
    border: none;
  }
  @media only screen and (max-width: 991px) {
    .button-container {
      justify-content: center;
      text-align: center;
      width: 100%;
      margin: 15px 0;
    }
  }
`;

const PresaleDeposit = ({depositeToken}) => {
  return (
    <Wrapper>
      <p className="m-0 deposit py-1">Deposit presale tokens</p>
      <div className="d-flex justify-content-between align-items-start align-items-lg-end  flex-column   flex-lg-row">
        <div>
          <p className="m-0 text py-1">
            You need to deposit # Ape to complete your presale
          </p>

          <p className="m-0 warning py-1">
            Make sure fees are disable before depositing tokens!
          </p>
        </div>
        <div className="button-container">
          <button className="button active" onClick={depositeToken}>Deposit</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default PresaleDeposit;
