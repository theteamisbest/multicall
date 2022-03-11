import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import Web3 from "web3";



const injected = new InjectedConnector({
  supportedChainIds: [56,97]
});

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/00ca1859789d4b40bce01f4104844224",
    56: "https://bsc-dataseed.binance.org/",
    97: "https://data-seed-prebsc-2-s3.binance.org:8545/"
  },
  network: "binance",
  qrcode: true,
  pollingInterval: 12000
});



const MySelect = ({ isWallet, selectArray, initialValue, image }) => {
  const [select, setSelect] = useState(initialValue);
  const [dropdown, setDropdown] = useState(false);

  const { active, account, library, activate, deactivate } = useWeb3React();

  const connectInjected = async () => {
    try {
      await activate(injected);
      // console.log(active);
      // window.web3 = new Web3(library.provider);
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectWalletConnect = async () => {
    try {
      await activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  };

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }


  return (
    <Wrapper>
      <div className="network" onClick={() => setDropdown((prev) => !prev)}>
        <img src={image} alt="" className="select-image" />
        <div className="text-center placeholeder">
          {select || (
            active ?
              <>
                <span>Connected with</span> <br />
                <span>{account}</span>
                
              </>
              :
              <span>Connect Wallet</span>
          )}
        </div>

        <FiChevronRight
          className="icon"
          style={{
            transform: dropdown && "rotate(90deg)",
            transition: ".3s",
          }}
        />
        {dropdown && (
          <div className="options">
            {isWallet == true ?
              active ?
                <div className="item" onClick={disconnect}>
                  Disconnect
                </div>
                :
                <>
                  <div className="item" onClick={connectWalletConnect}>
                    WallectConnect
                  </div>
                  <div className="item" onClick={connectInjected}>
                    Metamask
                  </div>

                </>
              :
              selectArray.map((el, i) => (
                <div className="item" key={i} onClick={() => setSelect(el)}>
                  {el}
                </div>
              ))
            }
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default MySelect;



const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;

  color: #989898;
  .network {
    display: flex;

    align-items: center;
    position: relative;

    padding: 2px 20px;
    height: 40px;
    border-radius: 30px;

    font-size: 13px;
    background: #fff;
    justify-content: space-between;
    font-family: "Open Sans", sans-serif 
  }
  .placeholeder {
    line-height: 15px;
    margin: 0 10px;
    font-family: "Open Sans", sans-serif 
  }
  .options {
    position: absolute;

    top: 60px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 8px;
    width: 100%;
    text-align: center;
    right: 4px;
    background: #fff;
  }
  .item {
    padding: 10px;
    border-radius: 8px;
  }
  .item:hover {
    background: rgba(131, 131, 131, 0.8);
    color: #fff;
  }
  .icon {
    font-size: 20px;
    margin-left: 10px;
  }
  .select-image {
    padding-right: 5px;
    width: 24px;
  }
  @media only screen and (max-width: 1199px) {
    .network {
      font-size: 13px;
      padding: 7px 10px;
      height: 45px;
    }
    .select-image {
      width: 24px;
    }
  }
 
  @media only screen and (max-width: 614px) {
    .network {
      display: flex;
justify-content:center;
      align-items: center;
      position: relative;
      border: none;
      padding:0;
      height: 50px;
      width:70px;
    }
    .placeholeder {
      display: none;
    }
    .icon {
      margin-left: 4px;
    }
    .options {
      width: 130px;
    } 
    }
  }
`;
