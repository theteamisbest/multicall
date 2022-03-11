import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";

const Wrapper = styled.div` 
font-family:"Open Sans";
background: #f1f6fb;
height:100vh;
.main-container{
    background:#fff;
    border-radius:40px;

}
.title-container{
    padding:20px 0;
    padding-left:30px;
    
}
.title{
    font-style: normal;
font-weight: bold;
font-size: 31px;
line-height: 25px;
display: flex;
align-items: center;

color: #1E1E1E;

}
.subtitle{
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 141%;


color: #3D3D3D;
}
 .main-search {
    padding-bottom: 20px;
   width:100%;
  }
  .searchInput {
    background: #f1f5fb;
    border: 1px solid #b8cce9;
    box-sizing: border-box;
    border-radius: 19.5px;

   width:93%;
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
    padding: 8px 5px;
    display: block;
    width: 100%;
    border: 0;
    background: #f1f5fb;
    padding-left: 15px;

    box-sizing: border-box;
    border-radius: 19.5px;
    outline: none;
  }
  .button {
    font-family: "Open Sans", sans-serif 
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.02);
    border-radius: 23.5px;
    outline: none;
    border: none;

    width: 130px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 37px;

    color: #0158d3;
    margin: 0 4px;
    
    outline: none;
    focus: none;
    padding: 0px 0;

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
  .honey{
      border:0;
      outline:0;
      background:#F45353;;
      font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
/* identical to box height */

display: flex;
align-items: center;
justify-content:center;
color: #000000;
border-radius:18px;
padding:8px 18px;
width:100%:

  }
  .main{
    background: #F1F5FB;
border: 1px solid #B8CCE9;
box-sizing: border-box;
border-radius: 40px;
  }
  .info-container{
      border-bottom:1px solid #C4D7F0;
      padding-bottom:4px;
      padding-top:8px;
  }
  .info{
    
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;

color: #000000;
  }
  .honey-breaking{
      display:none;
  }
  @media only screen and (max-width: 991px) {
      .honey{
          font-size:11px;
      }
      .button{
          margin-top:13px;
      }
  }
  @media only screen and (max-width: 767px) {
      .honey{
          font-size:10px;
      }
     .info{
         font-size:12px;
     }
  }

  @media only screen and (max-width: 522px) {
      .honey{
          
          display:none;
      }
      .honey-breaking{display:flex;}
      
     
  }
  `;

const Scan = () => {
  const scanArray = [
    { name: "Address", number: "0x7f938....8465" },
    { name: "Token Name", number: "Test" },
    { name: "Symbol", number: "Test" },
    { name: "Buying (Gas)", number: "182,748" },
    { name: "Selling (Gas)", number: "172,299" },
    { name: "Buy Tax ", number: "6%" },
    { name: "Sell Tax %", number: "12%" },
  ];

  return (
    <Wrapper>
      <Col sm={11} md={10} className="mx-auto main-container">
        <div className="title-container">
          {" "}
          <h2 className="title">Honeypot Scan</h2>
          <p className="m-0 subtitle px-1">Write disclaimer here</p>
        </div>
        <Col xs={11} lg={9} className="mx-auto py-4">
          <div className="mx-auto d-flex justify-content-center align-items-center flex-column flex-md-row main-search">
            <div className="searchInput">
              <FiSearch size={16} />
              <input
                type="text"
                className="input"
                placeholder="Enter token address to check honeypot"
              />
            </div>

            <button
              background="linear-gradient(180deg, #5E9CF3 0%, #0158D3 100%)"
              color="#fff"
              padding="13px 18px"
              margin="0"
              fontSize="13px"
              className="button active"
            >
              Search
            </button>
          </div>

          <div className="honey  mx-auto w-100">
            ❌ HONEY POT RUN THE FUCK AWAY AND DON’T LOOK BACK ❌
          </div>
          <div className="honey honey-breaking  mx-auto w-100">
            ❌ HONEY POT RUN THE FUCK <br /> AWAY AND DON’T LOOK BACK ❌
          </div>
          <div className="w-100 main px-3 py-3 my-3">
            {scanArray.map((el, i) => (
              <div
                key={i}
                className="d-flex justify-content-between aling-items-center  info-container"
              >
                <span className="info">{el.name}</span>
                <span className="info">{el.number}</span>
              </div>
            ))}
          </div>
        </Col>
      </Col>
    </Wrapper>
  );
};
export default Scan;
