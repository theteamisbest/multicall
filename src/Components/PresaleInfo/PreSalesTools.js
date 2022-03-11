import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPlus, BsTelegram } from "react-icons/bs";
import MySwitch from "../Switch/Switch";
import MyCountDown from "../MyCountDown/MyCountDown";
import { useNavigate } from "react-router-dom";
import Whitelist from "../AddRemoveWhitelist/AddRemoveWhitelist";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 100%;

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    color: #1e1e1e;
  }
  .test {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #1e1e1e;
  }
  .info {
    border-bottom: 1px solid #c4d7f0;
  }
  .update {
    align-items: center;
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    /* 1 */

    color: #1e1e1e;
  }
  .icon {
    width: 50px;
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #2f88ff;
    border-radius: 19.5px;
    color: #2f88ff;
    cursor: pointer;
  }
  .warning {
    font-style: normal;
    font-weight: normal;
    font-size: 6px;
    line-height: 141%;
    /* or 8px */

    color: #ff0000;
  }
  .Enabled {
    color: #2fc422;
  }
  .Disabled {
    color: #f94e4e;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;

    color: #3d3d3d;
    padding-right: 10px;
  }
  .withdraw {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
    outline: 0;
    border: none;
    background: #2397eb;
    border-radius: 19.5px;
    padding: 4px 8px;
  }
  .date {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #5e9cf3;
    padding-top: 6px;
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
    padding: 4px 15px;
    width: 50%;
  }
  .button:focus {
    outline: none;
    box-shadow: none;
  }
  .active {
    background: #f94e4e;
    color: #fff;
    border: none;
  }
`;

const PreSalesTools = ({ setModal, setWhitelist,active,account,presaleContract }) => {
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();



  useEffect(() => {
    if (active === true && presaleContract !== null) {
      loadData();
    }
  }, []);

  useEffect(() => {
    if (active === true && presaleContract !== null) {
      loadData();
    }
  }, [presaleContract]);

  const loadData = async () => {
    let _checkWhiteList = await presaleContract.methods.isWhitelisted(account).call();
    setChecked(_checkWhiteList);
  }

  const ChangeWhitelistStatus = async () => {

    console.log("changePresaleStatus");
    if (checked) {
      try {
        await presaleContract.methods.disableWhitelist().send({from:account});
        setChecked(false)
      } catch (error) {
        setChecked(true)
      }
    } else {
      try {
        await presaleContract.methods.activateWhitelist().send({from:account});
        setChecked(true)
      } catch (error) {
        setChecked(false)
      }
    }
  }
  const finalize = async () => {
      await presaleContract.methods.finalized().send({from:account});
  }
  const cancelPresaleOwner = async () => {
    await presaleContract.methods.cancelPresaleOwner().send({from:account});
  }
  const withdraw = async () => {
    await presaleContract.methods.claimBackContribution().send({from:account});
  }

  return (
    <Wrapper>
      <p className="title">Tools</p>
      <p className="m-0 d-flex justify-content-end test">TEST</p>

      <div className="info update d-flex justify-content-between py-2 ">
        <p className="m-0 text">Update Presale Details</p>
        <p className="m-0 icon" onClick={() => setModal(true)}>
          <BsPlus />
        </p>
      </div>
      <div className="info update d-flex justify-content-between py-2 ">
        <div className="d-flex flex-column">
          {" "}
          <p className="m-0 text">
            Presale whitelist:
            <span className={checked ? "Enabled" : "Disabled"}>
              {checked ? "Enabled" : "Disabled"}
            </span>
          </p>
          <span className="warning">Enable/Disable whitelist</span>
        </div>
        <MySwitch checked={checked} setChecked={setChecked} ChangeWhitelistStatus={ChangeWhitelistStatus} />
      </div>
      <div className="info update d-flex justify-content-between py-2 ">
        <div className="d-flex flex-column">
          {" "}
          <p className="m-0 text">Add/Remove Adresses </p>
          <p className="m-0 text"> (Whitelist)</p>
        </div>
        <p className="m-0 icon" onClick={() => setWhitelist(true)}>
          <BsPlus />
        </p>
      </div>
      <div className="info update d-flex justify-content-between py-2 ">
        <div className="d-flex flex-column">
          {" "}
          <p className="m-0 text">Need Support?</p>
          <span className="tagline">
            If you still cannot finalize then after recieving support please
            cancel your sale and test your contract thoroughly on our supported
            test nets!
          </span>
        </div>
        <BsTelegram color="#23C7EB" size={36} style={{ width: "50px" }} />
      </div>
      <div className="info  d-flex justify-content-between align-items-start py-2 ">
        <p className="m-0 text">Withdraw Liquidity tokens</p>
        <div className="d-flex justify-content-end flex-column align-items-end">
          <button className="withdraw" onClick={withdraw}>Withdraw</button>
          <p className="date">
            <MyCountDown date="Feb 05, 2022 20:00:00" />
          </p>
        </div>
      </div>

      <div className="d-flex py-3 button-container">
        <button className="button active" onClick={cancelPresaleOwner}>Cancel Presale</button>
        <button className="button" onClick={finalize}>Finalise</button>
      </div>
    </Wrapper>
  );
};
export default PreSalesTools;
