import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import PresaleManeger from "../Components/PresaleInfo/PresaleManeger";
import PreSaleTest from "../Components/PresaleInfo/PresaleTest";
import PreSalesTools from "../Components/PresaleInfo/PreSalesTools";
import PresaleSteps from "../Components/PresaleInfo/PreSaleSteps";
import PreSaleExlude from "../Components/PresaleInfo/PreSaleExclude";
import PresaleDeposit from "../Components/PresaleInfo/PresaleDeposit";
import MostViewed from "../Components/DifiChange/MostViewed";
import PreaSaleDetails from "../Components/PresaleInfo/PreaSaleDetails";
import RegisTerInteres from "../Components/RegisTerInterest/RegisTerInteres";
import Whitelist from "../Components/AddRemoveWhitelist/AddRemoveWhitelist";
import { useWeb3React } from "@web3-react/core";

import Web3 from "web3";
import PresaleABI from "../abis/ABI_Presale.json";
import ABI_SotrageLaunchpad from "../abis/ABI_SotrageLaunchpad.json";

const ManagePresale = () => {
  const [modal, setModal] = useState(false);
  const [whitelist, setWhitelist] = useState(false);
  const [registerInters, setRegisterInteres] = useState(true);
  const [presaleContract, setPresaleContract] = useState(null);
  const [presaleAddress, setPresaleAddress] = useState(null);

  const { active, account, library } = useWeb3React();

  const [tokenDetails, setTokenDetails] = useState(null);

  const [checkLoading, setcheckLoading] = useState(true);
  const [loadingMainData, setLoadingMainData] = useState(true);

  const [notice, setNotice] = useState("");

  // useEffect(() => {
  //   if (active === true) {
  //     window.web3 = new Web3(library.provider);
  //     loadData();
  //   }
  // }, [active])

  useEffect(() => {
    if (!registerInters) {
      if (active === true) {
        window.web3 = new Web3(library.provider);
        checkPresaleAddress();
      }
    }
  }, [registerInters]);

  const checkPresaleAddress = async () => {
    const web3 = window.web3;
    const contractAddress = "0xf7f927fAa5Da5B63763BD2d58384452D389A1e50";
    const _storageContract = await new web3.eth.Contract(
      ABI_SotrageLaunchpad,
      contractAddress
    );
    const _totalProjects = await _storageContract.methods
      .getProjectsCount()
      .call();
    for (let index = 0; index < _totalProjects.toString(); index++) {
      let _preSaleAddress = await _storageContract.methods
        .entryListByPresaleAddress(index)
        .call();
      let _preSaleContract = await new web3.eth.Contract(
        PresaleABI,
        _preSaleAddress
      );
      try {
        let _owner = await _preSaleContract.methods.owner().call();
        if (_owner === account) {
          setPresaleAddress(_preSaleAddress);
          setPresaleContract(_preSaleContract);
          break;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    setcheckLoading(false);
  };

  useEffect(() => {
    if (presaleContract != null) {
      loadData();
    }
  }, [presaleContract]);

  const loadData = async () => {
    let _tokenName = await presaleContract.methods.tokenName().call();
    let _symbol = await presaleContract.methods.tokenSymbol().call();
    let _token = await presaleContract.methods.token().call();
    let _weiRaised = await presaleContract.methods.weiRaised().call();
    let _maxContribution = await presaleContract.methods.tokenMaxContribution().call();

    const tokenArray = [
      {
        name: "Name",
        text: _tokenName,
      },
      {
        name: "Symbol",
        text: _symbol,
      },
      {
        name: "Token Address",
        text: _token,
      },
      {
        name: "Presale Address",
        text: presaleAddress,
      },
      {
        name: "Presale Link",
        text: "https://apelab.app",
      },
    ];

    let _item = {
      tokenArray: tokenArray,
      weiRaised: window.web3.utils.fromWei(_weiRaised.toString(), "ether"),
      maxContribution: window.web3.utils.fromWei(_maxContribution.toString(), "ether"),
    };

    setTokenDetails(_item);
    setLoadingMainData(false);
  };
  const depositeToken = async () => {
      await presaleContract.methods.depositTokensForPresale().send({from: account});
  };

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

  return (
    <>
      {registerInters && (
        <RegisTerInteres setRegisterInteres={setRegisterInteres} />
      )}

      {!registerInters && (
        <Wrapper>
          {checkLoading ? (
            <h1>Finding User's Presale Contract...</h1>
          ) : presaleAddress !== null ? (
            loadingMainData ? (
              <h1>
                You have Presale Contract. Now Loading DAta. Please wait.....
              </h1>
            ) : (
              <>
                <MostViewed
                  mostViewedArray={[...mostViewedArray]}
                  title="HOT PAIRS"
                />
                <Col xs={11} className="mx-auto my-3">
                  <Row className="">
                    <Col
                      md={6}
                      lg={4}
                      className="d-flex flex-column  presale presale-first"
                    >
                      <PresaleManeger tokenDetails={tokenDetails} /> <PreSaleTest tokenArray={tokenDetails.tokenArray} />
                    </Col>

                    <Col
                      md={6}
                      lg={5}
                      className="presale presale-second my-3 my-md-0"
                    >
                      <PreSalesTools
                        setModal={setModal}
                        setWhitelist={setWhitelist}
                        active={active}
                        account={account}
                        presaleContract={presaleContract}
                      />
                    </Col>
                    <Col md={6} lg={3} className="presaleSteps my-3 my-lg-0 ">
                      <PresaleSteps />
                    </Col>
                    <Col md={6} lg={12}>
                      <Row>
                        <Col md={12} lg={6} className="my-3">
                          <PreSaleExlude presaleAddress={presaleAddress} />
                        </Col>
                        <Col md={12} lg={6} className="my-3">
                          <PresaleDeposit depositeToken={depositeToken} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                {modal && (
                  <>
                    <PreaSaleDetails setModal={setModal} />

                    <div
                      className="overlay"
                      onClick={() => setModal(false)}
                    ></div>
                  </>
                )}
                {whitelist && (
                  <>
                    <Whitelist
                      active={active}
                      account={account}
                      presaleContract={presaleContract}
                      setWhitelist={setWhitelist}
                    />{" "}
                    <div
                      className="overlay"
                      onClick={() => setModal(false)}
                    ></div>
                  </>
                )}
              </>
            )
          ) : (
            <h1>You have't Presale Contract</h1>
          )}
        </Wrapper>
      )}
    </>
  );
};
export default ManagePresale;

const Wrapper = styled.div`
  background: #f1f6fb;
  height: 100%;
  padding-bottom: 30px;
  position: relative;
  height: 790px;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 1000px;
    z-index: 1500;
    cursor: pointer;
  }
`;
