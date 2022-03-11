import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LaunchPadCard from "./LaunchPadCard";
import { Row, Col } from "react-bootstrap";
import MostViewed from "../../DifiChange/MostViewed";
import { FiSearch } from "react-icons/fi";
import Selects from "./Select";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
} from 'ethereum-multicall';

import ABI_SotrageLaunchpad from "../../../abis/ABI_SotrageLaunchpad.json";
import PresaleABI from "../../../abis/ABI_Presale.json"


const LaunchPadDashboard = ({ collapsed }) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [launchPadArray, setlaunchPadArray] = useState([]);
  const [mainLoading, setmainLoading] = useState(true);

  const { active, account, library } = useWeb3React();

  useEffect(() => {
    if (active === true) {
      window.web3 = new Web3(library.provider);
      loadData();
    }
  }, [active])

  const loadData = async () => {
    const web3 = window.web3;
    const contractAddress = '0xf7f927fAa5Da5B63763BD2d58384452D389A1e50';
    const _storageContract = await new web3.eth.Contract(ABI_SotrageLaunchpad, contractAddress);
    const _totalProjects = await _storageContract.methods.getProjectsCount().call();
    console.log(_totalProjects);


    console.log("results1111");
    // const web3_ = new Web3('https://data-seed-prebsc-2-s1.binance.org:8545');
    const web3_ = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545/');

    const multicall = new Multicall({ web3Instance: web3_, tryAggregate: true });

    // const contractCallContext = [
    //     {
    //         reference: 'Storagecontract',
    //         contractAddress: '0xf7f927fAa5Da5B63763BD2d58384452D389A1e50',
    //         abi: ABI_SotrageLaunchpad,
    //         calls: [{ reference: 'entryListByPresaleAddressCall', methodName: 'entryListByPresaleAddress', methodParameters: [2] }]
    //     },
    //     {
    //       reference: 'Storagecontract2',
    //       contractAddress: '0xf7f927fAa5Da5B63763BD2d58384452D389A1e50',
    //       abi: ABI_SotrageLaunchpad,
    //       calls: [{ reference: 'getProjectsCountCall', methodName: 'getProjectsCount', methodParameters: [] }]
    //   }
    // ];

    const contractCallContext = [
      {
          reference: 'testContract',
          contractAddress: '0xf7f927fAa5Da5B63763BD2d58384452D389A1e50',
          abi: [ { name: 'getProjectsCount', type: 'function', inputs: [],stateMutability: "view", outputs: [ { name: 'entityCount', type: 'uint256' }] }],
          calls: [{ reference: 'getProjectsCountCall', methodName: 'getProjectsCount', methodParameters: [] }]
      },
      {
          reference: 'testContract2',
          contractAddress: '0xf7f927fAa5Da5B63763BD2d58384452D389A1e50',
          abi: [ { name: 'entryListByPresaleAddress', type: 'function', inputs: [ { name: '', type: 'uint256' } ], 		stateMutability: "view", outputs: [ { name: '', type: 'address' }] } ],
          calls: [{ reference: 'entryListByPresaleAddressCall', methodName: 'entryListByPresaleAddress', methodParameters: [2] }]
      }
  ];

    try {
      const results = await multicall.call(contractCallContext);
      console.log("results");
      console.log(results);
    } catch (error) {
      console.log(error.message);
    }


    // setlaunchPadArray(_launchPadArray)

    let _array = [];
    for (let index = 0; index < _totalProjects.toString(); index++) {
      let _preSaleAddress = await _storageContract.methods.entryListByPresaleAddress(index).call();
      let _preSaleContract = await new web3.eth.Contract(PresaleABI, _preSaleAddress);
      try {
      let _tokenName = await _preSaleContract.methods.tokenName().call();
      let _hardCap = await _preSaleContract.methods.tokenHardCap().call();
      let _contribution = await _preSaleContract.methods.getContribution(account).call();
      let _Mincontribution = await _preSaleContract.methods.tokenMinContribution().call();
      let _Maxcontribution = await _preSaleContract.methods.tokenMaxContribution().call();
      let _tokenLockTime = await _preSaleContract.methods.tokenLockTime().call();
      let _preSaleStartTime = await _preSaleContract.methods.tokenStartTime().call();
      let _liqudity = await _preSaleContract.methods.tokenDEXLiquidity().call();
      let _progress = await _preSaleContract.methods.weiRaised().call();
      let _item = {
        preAddress:_preSaleAddress,
        status: "upcoming",
        audit: "",
        profile: "./images/profile1.svg",
        name: _tokenName,
        con: _contribution,
        minCon: window.web3.utils.fromWei(_Mincontribution.toString(), "ether"),
        maxCon:  window.web3.utils.fromWei(_Maxcontribution.toString(), "ether"),
        frombnb:  _hardCap / 2,
        tobnb: _hardCap,
        progress: (_progress/_Maxcontribution)*100,
        liquidity: _liqudity,
        lockupTime: _tokenLockTime,
        // lockupTime: 150,
        time: _preSaleStartTime,
        // time: "Dec 05, 2021 20:00:00",

      }
      _array.push(_item);
        
    } catch (error) {
      console.log(error.message)
    }
    }
    
    setlaunchPadArray(_array)
    setmainLoading(false);
  }


  const _launchPadArray = [
    {
      status: "upcoming",
      audit: "",
      profile: "./images/profile1.svg",
      name: "DOGO INU",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "cancelled",
      audit: "",
      profile: "./images/profile2.svg",
      name: "The Realm Defenders",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "sale live",
      audit: "Audit",
      profile: "./images/profile3.svg",
      name: "Lorem Ipsum",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "sale live",
      audit: "",
      profile: "./images/profile4.svg",
      name: "Sisters fall",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 70,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "upcoming",
      audit: "",
      profile: "./images/profile5.svg",
      name: "DOGO INU",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "cancelled",
      audit: "",
      profile: "./images/profile6.svg",
      name: "DOGO INU",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "sale live",
      audit: "Audit",

      profile: "./images/profile7.svg",
      name: "DOGO INU",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
    {
      status: "sale live",
      audit: "",
      profile: "./images/profile8.svg",
      name: "DOGO INU",
      bnb: "650,000,000",

      frombnb: 100,
      tobnb: 200,
      progress: 0.0,
      liquidity: 70,
      lockupTime: 365,
      time: "Dec 05, 2021 20:00:00",
    },
  ];
  const mostViewedArray = [
    {
      title: "HOT PAIRS",
      icon: "./images/mostviewed.svg",
      icon2: "./images/hotpairs.svg",
    },
    {
      title: "#1 GODZ",
      icon: "./images/2.svg",
    },
    {
      title: "#2 ELMON",
      icon: "./images/3.svg",
    },
    {
      title: "#3 ETERNAL",
      icon: "./images/4.svg",
    },
    {
      title: "#4 KGT",
      icon: "./images/5.svg",
    },
    {
      title: "#5 SCAR",
      icon: "./images/6.svg",
    },
    {
      title: "#6 GOLD",
      icon: "./images/7.svg",
    },
    {
      title: "#7 RACA",
      icon: "./images/8.svg",
    },
    {
      title: "#8 SAR",
      icon: "./images/9.svg",
    },
  ];

  const select = ["HardCap", "SoftCap", "LP percent", "Start time", "End time"];
  const select2 = [
    "KYC",
    "Upcoming",
    "InProgress",
    "Filled",
    "Ended",
    "Cancelled",
  ];
  const Filtering = (value) => {
    console.log(value);
  };
  const Sorting = (value) => {
    console.log(value);
  };
  return (
    <Wrapper>
      <MostViewed mostViewedArray={[...mostViewedArray]} title="HOT PAIRS" />
      <Col xs={11} className="mx-auto">
        <h1 className="title">Launchpad Dashboard</h1>
        <div className="main py-4 px-3">
          <Col
            md={11}
            lg={8}
            xxl={6}
            className="mx-auto d-flex justify-content-center align-items-center flex-column flex-md-row main-search"
          >
            <div className="searchInput">
              <FiSearch size={16} />
              <input
                type="text"
                className="input"
                placeholder="Enter token name or token symbol"
              />
            </div>
            <div className="my-selects-container d-flex">
              <div
                className="select-container mx-1"
                onClick={() => setDropdown((prev) => !prev)}
              >
                {" "}
                <Selects
                  initialValue="No Filter"
                  filterDropdown={dropdown}
                  select={select}
                  Filtering={Filtering}
                />
              </div>
              <div
                className="select-container mx-1"
                onClick={() => setDropdown2((prev) => !prev)}
              >
                {" "}
                <Selects
                  initialValue="All Status"
                  sortDropdown={dropdown2}
                  select={select2}
                  Sorting={Sorting}
                />
              </div>
            </div>
          </Col>
          <Row>
            
            {active
              ?
              mainLoading
              ?
              <h1>Loading Please wait........</h1>
              :
              launchPadArray.length === 0
              ?
              <h1>There is nothing to show</h1>
              :
              launchPadArray.map((el, i) => (
                <Col
                  sm={collapsed ? 6 : 12}
                  md={collapsed ? 4 : 6}
                  lg={collapsed ? 3 : 4}
                  xl={3}
                  xxl={3}
                  key={i}
                  className=""
                >
                  {" "}
                  <LaunchPadCard {...el} />
                </Col>
              ))
              :
              <h1>Please Connect Wallet</h1>
}
          </Row>
        </div>
      </Col>
    </Wrapper>
  );
};
export default LaunchPadDashboard;

const Wrapper = styled.div`
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 25px;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 15px 0;
    color: #002861;
  }

  .main {
    background: #fff;
    border-radius: 11px;
    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.08);
  }
  .main-search {
    padding-bottom: 20px;
  }
  .searchInput {
    background: #f1f5fb;
    border: 1px solid #b8cce9;
    box-sizing: border-box;
    border-radius: 19.5px;

    width: 70%;
    padding: 0 18px;
    margin-right: 8px;
    color: #8b8b8b;
    font-size: 13px;
    display: block;
    outline: none;
    display: flex;
    align-items: center;
  }
  .input {
    padding: 10px 5px;
    display: block;
    width: 100%;
    border: 0;
    background: #f1f5fb;
    padding-left: 15px;

    box-sizing: border-box;
    border-radius: 19.5px;
    outline: none;
  }
  .select-container {
    position: relative;
    width: 125px;
    border: 1px solid #b8cce9;

    border-radius: 19.5px;
    padding: 0 5px;
  }
  @media only screen and (max-width: 767px) {
    .searchInput {
      margin-bottom: 6px;
      width: 100%;
    }
  }
`;