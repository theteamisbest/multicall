import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 61%;


 

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    margin: 0;

    /* 1 */

    color: #1e1e1e;
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
  .input {
    background: #f1f5fb;
    border: 1px solid #b8cce9;
    box-sizing: border-box;
    border-radius: 19.5px;
    outline: none;
    width: 100%;
    padding: 6px 6px;
    display: inline-block;
    padding-left: 30px;
    color: #3d3d3d;
    font-size:12px;
  }
  .button-container{
    border-bottom: 1px solid #c4d7f0;
  }
  .button {
    font-family: "Open Sans", sans-serif 
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
    padding:4px 15px;
    width:50%;
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
  .amount-container{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:6px;
    border-bottom:1px solid #C4D7F0;
  }
  .amount-text{
    font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;

/* 1 */

color: #1E1E1E;
margin-right:8px;

  }
  .amount{
    background: #FFFFFF;
border: 1px solid #2F88FF;
box-sizing: border-box;
border-radius: 19.5px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 19px;
display: flex;
align-items: center;
justify-content:center;
color: #0158D3;
padding: 5px 10px;
width:70px;
margin:0;


  }
 
  @media only screen and (max-width: 1199px) {
    height: 61%;
  }
  @media only screen and (max-width: 991px) {
    height: 58%;
  }
  @media only screen and (max-width: 767px) {
    margin:0;
    margin-bottom:18px;
  }
`;

const ContributeAndClaim = ({ preSaleAddress,active, account, preSaleContract }) => {

  const valueConRef = useRef(null);

  const [maxContribution, setMaxContribution] = useState(0)
  const [totalContributed, settotalContributed] = useState(0);
  const [myContribution, setMyContribution] = useState(0);

  // const setActive = (e) => {
  //   const allButton = document.querySelectorAll(".button");

  //   allButton.forEach((el) => el.classList.remove("active"));
  //   e.target.classList.add("active");
  // };

  useEffect(() => {
    if (active === true && preSaleContract !== null) {
      loadData();
    }
  }, []);

  useEffect(() => {
    if (active === true && preSaleContract !== null) {
      loadData();
    }
  }, [preSaleContract]);

  const loadData = async () => {
    let _weiRaised = await preSaleContract.methods.weiRaised().call();
    settotalContributed(window.web3.utils.fromWei(_weiRaised.toString(), "ether"));
  
    let _Maxcontribution = await preSaleContract.methods.tokenMaxContribution().call();
    setMaxContribution(window.web3.utils.fromWei(_Maxcontribution.toString(), "ether"))
    
    let _getContribution = await preSaleContract.methods.getContribution(account).call();
    setMyContribution(_getContribution.toString());

  }

  const contribute = async () => {
    if (valueConRef.current.value > 0 && preSaleContract !== null ) {
      try {
        window.web3.eth.sendTransaction({to: preSaleAddress, from: account, value: window.web3.utils.toWei(valueConRef.current.value.toString(), "ether")});
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  const claim = async () => {
      try {
        console.log(preSaleContract.methods);
        await preSaleContract.methods.claimBackContribution().send({from:account});
      } catch (error) {
        console.log(error.message);
      }
  }

  return (
    <Wrapper>
      <p className="title">Contribute & Claim</p>
      <div className="py-3 py-md-2 py-lg-3">
        {" "}
        <div className="progress-title">{totalContributed}/{maxContribution}</div>
        <ProgressBar now={(totalContributed/maxContribution)*100} />
        <div className="d-flex justify-content-between align-items-center">
          <span className="bnb">{totalContributed} BNB</span>{" "}
          <span className="bnb">{maxContribution} BNB</span>
        </div>
      </div>

      <div className="input-container py-2">
        <input ref={valueConRef} type="text" className="input " placeholder="1 BNB = 1000 HFG" />
      </div>
      <div className="d-flex py-3 py-md-2 py-lg-3 button-container">
        <button className="button active" onClick={contribute}>
          Contribute
        </button>
        <button className="button active" onClick={claim}>
          Claim
        </button>
      </div>
      <div className="amount-container py-2 ">
        <span className="amount-text">Your contributed amount (BNB)</span>
        <p className=" amount">{myContribution} BNB</p>
      </div>
      <div className="amount-container py-2 ">
        <span className="amount-text">Amount of purchased tokens </span>
        <p className=" amount">100M</p>
      </div>
    </Wrapper>
  );
};
export default ContributeAndClaim;
