import React, { useEffect, useRef , useState} from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { Button } from "react-bootstrap";
import InputItem from "./InputItem";
import { useWeb3React } from "@web3-react/core";

import { useNavigate } from "react-router-dom";



import Web3 from "web3";
import { IoMdAdd } from "react-icons/io";

// import PresaleABI from "../../../abis/ABI_Presale.json"
import PresaleMasterABI from "../../../abis/ABI_Master.json"


// const MainContract = new useWeb3React()
// (Abi_Presale, Web3.utils.toChecksumAddress
// ("0x7Fa15A54c1e61ab3A10A2A3ecd1Db1D95003f055"));

const CreatePresale = () => {
  const navigate = useNavigate();

  const { active, account, library, networkId, connector, provider } = useWeb3React();

  const [notice, setNotice] = useState('');


  useEffect(() => {
    if (active === true) {
      window.web3 = new Web3(library.provider);
    }
  }, [active])

  const tokenAddRef = useRef(null);
  const promoCodeRef = useRef(null);
  const hardCapRef = useRef(null);
  const liqudityRef = useRef(null);
  const selectRouterRef = useRef(null);
  const listingRateRef = useRef(null);
  const prisaleRateRef = useRef(null);
  const minConRef = useRef(null);
  const maxConRef = useRef(null);
  const preSaleStartRef = useRef(null);
  const preSaleEndRef = useRef(null);
  const liqudityLockTimeRef = useRef(null);


  const checkAllDataForUpload = () => {
    if (active) {

      const data = {
        "tokenAddress": tokenAddRef.current.value,
        "promoCodeRef": promoCodeRef.current.value,
        "hardCapRef": hardCapRef.current.value,
        "liqudityRef":  liqudityRef.current.innerText.substring(0, liqudityRef.current.innerText.length - 1),
        // "selectRouterRef": selectRouterRef.current.innerText,

        "selectRouterRef": "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
        "listingRateRef":  window.web3.utils.toWei(listingRateRef.current.value.toString(), 'ether'),
        "prisaleRateRef":  window.web3.utils.toWei(prisaleRateRef.current.value.toString(), 'ether'),
        "minConRef": window.web3.utils.toWei(minConRef.current.value.toString(), 'ether'),
        "maxConRef": window.web3.utils.toWei(maxConRef.current.value.toString(), 'ether'),
        "preSaleStartRef": new Date(preSaleStartRef.current.value).getTime() / 1000,
        "preSaleEndRef": new Date(preSaleEndRef.current.value).getTime() / 1000,
        "liqudityLockTimeRef": new Date(liqudityLockTimeRef.current.innerText).getTime() / 1000,
      }

      if (data.tokenAddress != '' && data.promoCodeRef != '' && data.hardCapRef != '' && data.liqudityRef != '' && data.selectRouterRef != '' && data.listingRateRef != '' && data.prisaleRateRef != '' && data.minConRef != '' && data.maxConRef != '' && data.preSaleStartRef != '' && data.preSaleEndRef != '' && data.liqudityLockTimeRef != '') {
        setNotice("Loading Please wait....")
        createPresleContract(data)
        
      } else {
        
        setNotice("Please fill all informations Correct")
      }


    };
  }


  const createPresleContract = async(data)=>{
        const web3 = window.web3;
        const contractAddress = '0x78C1dCA7f6A8dE0e5f46f6b929ee9b8670c4f55e';
        const _preSaleContract = await new web3.eth.Contract(PresaleMasterABI, contractAddress);
        try {
          // const _data = await _preSaleContract.methods.createNewPresale(data.promoCodeRef,data.tokenAddress,data.prisaleRateRef,data.hardCapRef,data.minConRef,data.maxConRef,data.liqudityRef,data.listingRateRef,data.preSaleStartRef,data.preSaleEndRef,data.liqudityLockTimeRef,data.selectRouterRef).send({ from: account });
          const _data = await _preSaleContract.methods.createNewPresale(data.tokenAddress,data.prisaleRateRef,data.hardCapRef,data.minConRef,data.maxConRef,data.liqudityRef,data.listingRateRef,data.preSaleStartRef,data.preSaleEndRef,data.liqudityLockTimeRef,data.selectRouterRef).send({ from: account });

          navigate("createNow");
      } catch (error) {
          console.log(error.message);
          setNotice(error.message)
      }

  }


  const createLauncPadArray = [
    {
      icon: <BiUserCircle />,
      name: "Token Address",
      placeholeder: "Enter contact address",
      col: 12,
      forRef: tokenAddRef,
    },
    {
      name: "PromoCode",
      placeholeder: "Example 50 BNB",
      forRef: promoCodeRef,
    },
    {
      name: "Hard Cap",
      placeholeder: "Example 100 BNB",
      forRef: hardCapRef
    },
    {
      name: "Liquidity %",
      placeholeder: "01/01/22",
      warning: "Minimum 50%",
      select: ["50%", "60%", "70%", "80%", "90%", "100%"],
      initialValue: "70%",
      forRef: liqudityRef

    },

    {
      name: "Select Router",
      select: ["PancakeSwap v2"],
      initialValue: "PancakeSwap v2",
      forRef: selectRouterRef
    },
    {
      name: "Listing Rate",
      placeholeder: "Example 50 BNB",
      forRef: listingRateRef
    },
    {
      name: "Presale Rate",
      placeholeder: "Example 100 BNB",
      forRef: prisaleRateRef
    },
    {
      name: "Minimum Contribution",
      placeholeder: "0.1",
      forRef: minConRef
    },
    {
      name: "Maximum Contribution",
      placeholeder: "2",
      forRef: maxConRef
    },
    {
      name: "Presale Start date",
      type: "date",
      forRef: preSaleStartRef
    },
    {
      name: "Presale End date",
      type: "date",
      forRef: preSaleEndRef
    },
    {
      name: "Liquity Lock Time",
      select: ["01/06/2022", "07/07/2023", "01/08/2022", "08/08/2023"],
      initialValue: "01/05/2022",
      warning: "Minimum 3 Months",
      col: 12,
      forRef: liqudityLockTimeRef
    },
  ];


  return (
    <Wrapper className="py-4">
      <Col xs={12} className="mx-auto main ">
        <Col xs={10} md={9} lg={8} xl={7} xxl={5} className="mx-auto ">
          <div className="d-flex justify-content-center align-items-center flex-column text-center header">
            <img src="./images/pascale.svg" alt="pascale" />
            <h5 className="title py-2">Create Presale</h5>

            <span className="tagline py-0">
              Lock tokens in a instant. Simply fill out the below form
            </span>
            <span className="tagline  top-warning">
              You must have the ability to whitelist ( exclude Formfee) multiple
              addresses or turn off special transfersIf any burn, revbase or
              other special transfers are to take place
            </span>
          </div>
          <Row>
            {createLauncPadArray.map((el, i) => (
              <InputItem {...el} />
            ))}
          </Row>
          // <NavLink to="createnow">
            // </NavLink>

          {active
            ?
            <Button className="button  w-100" onClick={checkAllDataForUpload}>
              Next
            </Button>
            :
            <Button className="button  w-100" disabled={true}>
              Please Connect Wallect
            </Button>
          }

        <p>{notice}</p>


        </Col>
      </Col>
    </Wrapper>
  );
};
export default CreatePresale;



const Wrapper = styled.div`
  background: #f1f5fb;
  font-family: "Open Sans";
  height: auto;

  .main {
    background: #ffffff;
    border-radius: 11px;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #002861;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #3d3d3d;
  }
  .warning {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #ff6262;
  }
  .top-warning {
    display: inline-block;
    padding-top: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ff5858;
  }
  .name {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* 7 */

    color: #002861;
  }
  .input-container {
    margin: 8px 0;
    background: #f1f5fb;

    border: 1px solid #c4d7f0;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 14px;
    position: relative;
    color: #3d3d3d;
  }

  .input {
    border: 0;
    outline: 0;
    font-size: 14px;
    padding: 10px 8px;
    background: #f1f5fb;
    color: #3d3d3d;
  }
  input {
    font-size: 14px;
  }

  input::placeholder {
    color: #3d3d3d;
    opacity: 1;
  }
  .button {
    font-family: "Open Sans", sans-serif;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.02);
    border-radius: 23.5px;
    outline: none;
    border: none;

    width: 130px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 37px;

    color: #0158d3;
    margin: 0 4px;
    margin-top: 25px;
    margin-bottom: 25px;
    outline: none;
    focus: none;
    padding: 3px 0;

    border: 1px solid #0158d3;
    background: #fff;
    color: #0158d3;
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
  .header {
    padding: 30px 0;
  }

  @media only screen and (max-width: 767px) {
    .tagline {
      font-size: 14px;
    }

    .name {
      font-size: 13px;
    }
    .input {
      font-size: 12px;
    }
    .button {
      font-size: 12px;
      padding: 0px;
      width: 120px;
    }
  }
`;