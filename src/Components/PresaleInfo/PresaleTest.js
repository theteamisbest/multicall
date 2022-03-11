import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 15px;
  height: 47%;
  .wrapper2 {
    background: #fff;
    padding: 18px;
    border-radius: 15px;
    font-family: "Open Sans";
    height: 100%;
  }
  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #3d3d3d;
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #1e1e1e;
  }
`;

const PreSaleTest = ({tokenArray}) => {
  // const tokenArray = [
  //   {
  //     name: "Name",
  //     text: "TEST",
  //   },
  //   {
  //     name: "Symbol",
  //     text: "TST",
  //   },
  //   {
  //     name: "Token Address",
  //     text: "0x58..847",
  //   },
  //   {
  //     name: "Presale Address",
  //     text: "0x58..847",
  //   },
  //   {
  //     name: "Presale Link",
  //     text: "https://apelab.app",
  //   },
  // ];
  return (
    <Wrapper>
   <div className="wrapper2">
        {tokenArray.map((el, i) => (
          <div className="d-flex justify-content-between align-items-center py-1 name-number-container">
            <span className="name">{el.name}</span>
            <span className="text">{el.text}</span>
            
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default PreSaleTest;
