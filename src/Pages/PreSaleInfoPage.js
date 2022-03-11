import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import PreSaleStartsIn from "../Components/PresaleInfo/PreSaleStartsIn";
import ContributeAndClaim from "../Components/PresaleInfo/ContributeAndClaim";
import PreInfoCard from "../Components/PresaleInfo/PreInfoCard";
import EmergencyWithDraw from "../Components/PresaleInfo/EmergencyWithdraw";

import WhiteListPresale from "../Components/PresaleInfo/WhiteListedPresale";
import WithdrawAndSumbit from "../Components/PresaleInfo/WithdrawAndSubmit";
import { useParams } from "react-router-dom";

import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import PresaleABI from "../abis/ABI_Presale.json";

const PreSaleInfoPage = ({ collapsed }) => {
  const { active, account, library } = useWeb3React();

  const [preSaleContract, setpreSaleContract] = useState(null);
  const [preSaleinfoArray, setpreSaleinfoArray] = useState([]);
  const [tokenAddress, settokenAddress] = useState(null);

  const [preSaledate, setPreSaledate] = useState(0);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const [loadingData, setLoadingData] = useState(true);

  const { address } = useParams();

  useEffect(() => {
    setpreSaleinfoArray(__preInfoArray);
    if (address === "" || address === null || address == undefined) {
    } else {
      if (active === true) {
        window.web3 = new Web3(library.provider);
        loadData();
      }
    }
  }, []);

  useEffect(() => {
    if (address === "" || address === null || address == undefined) {
    } else {
      if (active === true) {
        window.web3 = new Web3(library.provider);
        loadData();
      }
    }
  }, [active]);

  const loadData = async () => {
    const web3 = window.web3;
    let _preSaleContract = await new web3.eth.Contract(PresaleABI, address);
    setpreSaleContract(_preSaleContract);

    // let _tokenName = await _preSaleContract.methods.tokenName().call();
    let _tokenaddress = await _preSaleContract.methods.token().call();
    settokenAddress(_tokenaddress);
    let _hardCap = await _preSaleContract.methods.tokenHardCap().call();
    let _tokenListingRate = await _preSaleContract.methods
      .tokenListingRate()
      .call();
    let _tokenPresaleRate = await _preSaleContract.methods
      .tokenPresaleRate()
      .call();
    let _isWhitelisted = await _preSaleContract.methods
      .isWhitelisted(account)
      .call();
    setIsWhitelisted(_isWhitelisted);
    // let _contribution = await _preSaleContract.methods.getContribution().call();
    let _Mincontribution = await _preSaleContract.methods
      .tokenMinContribution()
      .call();
    let _Maxcontribution = await _preSaleContract.methods
      .tokenMaxContribution()
      .call();
    let _tokenLockTime = await _preSaleContract.methods.tokenLockTime().call();
    let _preSaleStartTime = await _preSaleContract.methods
      .tokenStartTime()
      .call();
    setPreSaledate(_preSaleStartTime);
    let _preSaleEndTime = await _preSaleContract.methods.tokenEndTime().call();
    let _liqudity = await _preSaleContract.methods.tokenDEXLiquidity().call();
    // let _progress = await _preSaleContract.weiRaised().call();

    const _preInfoArray = [
      {
        name: "Soft Cap",
        number: _hardCap / 2,
      },
      {
        name: "Hard Cap",
        number: _hardCap,
      },
      {
        name: "Liquidity%",
        number: _liqudity,
      },
      {
        name: "Enable Whitelist",
        number: _isWhitelisted ? "Yes" : "No",
      },
      {
        name: "Listing Rate",
        number: web3.utils.fromWei(_tokenListingRate.toString(), "ether"),
      },
      {
        name: "Presale Rate",
        number: web3.utils.fromWei(_tokenPresaleRate.toString(), "ether"),
      },
      {
        name: "Minimum Contribution",
        number: web3.utils.fromWei(_Mincontribution.toString(), "ether"),
      },
      {
        name: "Maximum Contribution",
        number: web3.utils.fromWei(_Maxcontribution.toString(), "ether"),
      },
      {
        name: "Presale Start Date",
        number: timeConverter(_preSaleStartTime),
      },
      {
        name: "Presale End Date",
        number: timeConverter(_preSaleEndTime),
      },
      {
        name: "Liquity Lock Time",
        number: timeConverter(_tokenLockTime),
      },
    ];

    setpreSaleinfoArray(_preInfoArray);
    setLoadingData(false);
  };

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  const __preInfoArray = [
    {
      name: "Soft Cap",

      number: "50 BNB",
    },
    {
      name: "Hard Cap",

      number: "100 BNB",
    },
    {
      name: "Liquidity%",

      number: "70%",
    },
    {
      name: "Enable Whitelist",

      number: "Yes",
    },
    {
      name: "Listing Rate",

      number: "50 BNB",
    },
    {
      name: "Presale Rate",

      number: "100 BNB",
    },
    {
      name: "Minimum Contribution",

      number: "0.1",
    },
    {
      name: "Maximum Contribution",

      number: "2",
    },
    {
      name: "Presale Start Date",

      number: "01/01/2022",
    },
    {
      name: "Presale End Date",

      number: "10/01/2022",
    },
    {
      name: "Liquity Lock Time",

      number: "01/05/2022",
    },
  ];

  return (
    <Wrapper className="py-3">
      {active ? (
        loadingData ? (
          <h1>Loading Data. Please Wait....</h1>
        ) : (
          <>
            <Col xs={11} className="mx-auto">
              <Row className="d-none d-md-flex">
                <Col md={6} lg={6} xl={4}>
                  <PreInfoCard
                    preSaleinfoArray={preSaleinfoArray}
                    tokenAddress={tokenAddress}
                    presaleAddress={address}
                  />
                </Col>
                <Col md={6} lg={6} xl={4}>
                  <PreSaleStartsIn preSaledate={preSaledate} />

                  <ContributeAndClaim
                    preSaleAddress={address}
                    active={active}
                    account={account}
                    preSaleContract={preSaleContract}
                  />
                </Col>
                <Col
                  md={6}
                  lg={6}
                  xl={4}
                  className="my-3 my-lg-0 d-none d-xl-block"
                >
                  <WhiteListPresale isWhitelisted={isWhitelisted} />
                  <WithdrawAndSumbit
                    preSaleAddress={address}
                    active={active}
                    account={account}
                    preSaleContract={preSaleContract}
                  />
                  <EmergencyWithDraw />
                </Col>
                <Col md={12} lg={12} xl={4} className="my-3 my-xl-0 d-xl-none">
                  <Row>
                    <Col md={6}>
                      <WhiteListPresale isWhitelisted={isWhitelisted} />
                    </Col>
                    <Col md={6}>
                      <WithdrawAndSumbit
                        preSaleAddress={address}
                        active={active}
                        account={account}
                        preSaleContract={preSaleContract}
                      />
                    </Col>
                    <Col md={6}>
                      <EmergencyWithDraw />
                    </Col>
                    {/* <Col md={6}>
                <KycAndAudit />
              </Col> */}
                  </Row>
                </Col>
              </Row>
              <Row className="d-flex d-md-none">
                <PreSaleStartsIn preSaledate={preSaledate} />
                <ContributeAndClaim
                  preSaleAddress={address}
                  active={active}
                  account={account}
                  preSaleContract={preSaleContract}
                />
                <WhiteListPresale isWhitelisted={isWhitelisted} />
                <PreInfoCard
                  preSaleAddress={address}
                  active={active}
                  account={account}
                  preSaleContract={preSaleContract}
                />

                <WithdrawAndSumbit
                  preSaleAddress={address}
                  active={active}
                  account={account}
                  preSaleContract={preSaleContract}
                />
                <EmergencyWithDraw />
              </Row>
            </Col>
          </>
        )
      ) : (
        <h1>Please Connect Wallet</h1>
      )}
    </Wrapper>
  );
};
export default PreSaleInfoPage;
const Wrapper = styled.div`
  background: #f1f6fb;
  height: 100%;
  padding-bottom: 30px;
  .gap {
    padding-top: 15px;
  }
  .contains {
  }
`;
