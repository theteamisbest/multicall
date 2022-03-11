import React from "react";
import styled from "styled-components";
import MyCountDown from "../MyCountDown/MyCountDown";

const Wrapper = styled.div`
  font-family: "Open Sans";
  padding: 18px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  height: 28%;
  .withdrawAndSumbit {
  }
  .button {
    background: #ff0000;
    border-radius: 19.5px;
    padding: 10px 4px;
    outline: 0;
    border: 0;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
    width: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit-button {
    color: #0158d3;
    border-radius: #0158d3;
    background: none;
    border: 1px solid #0158d3;
    padding: 10px 12px;
  }
  .title {
    font-family: Open Sans;
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
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 11px;
    display: flex;
    align-items: center;

    color: #e83b1a;
  }
  .submit-text {
    color: #0158d3;
  }
  .count-down {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #5e9cf3;
  }
  @media only screen and (max-width: 1199px) {
    height: 200px;
  }
  .warning {
    text-align: center;
  }
`;

const withdrawAndSumbit = ({ preSaleAddress,active, account, preSaleContract }) => {

  const emWithdraw = async () => {
    try {
      await preSaleContract.methods.claimBackContribution().send({from:account});
    } catch (error) {
      console.log(error.message);
    }
}

const emSubmit = async () => {
  try {
    await preSaleContract.methods.cancelPresale().send({from:account});
  } catch (error) {
    console.log(error.message);
  }
}

  return (
    <Wrapper>
      <div
        className="d-flex justify-content-between align-items-center py-2"
        style={{ borderBottom: "1px solid #C4D7F0" }}
      >
        <div className="withdrawAndSumbit">
          {" "}
          <p className="title">Emergency withdraw</p>
          <p className="warning">
            Warning! 15% early withdraw fee will be taken.
          </p>
        </div>
        <div className="d-flex flex-column">
          <button className="button" onClick={emWithdraw}>Withdraw</button>
        </div>
      </div>
      <div
        className="d-flex justify-content-between align-items-center py-2"
        style={{ borderBottom: "1px solid #C4D7F0" }}
      >
        <div className="withdrawAndSumbit">
          {" "}
          <p className="title">Emergency withdraw</p>
          <p className="warning submit-text">
            Warning! 15% early withdraw fee will be taken.
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <button className="button submit-button" onClick={emSubmit}>Submit</button>
          <div className="count-down">
            {" "}
            <MyCountDown dayCount="Feb 05, 2022 20:00:00 " />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default withdrawAndSumbit;
