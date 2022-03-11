import React from "react";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 100%;
  .presaleAddress {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 141%;

    color: #3d3d3d;
  }
  .routerAddress {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 141%;

    color: #1e1e1e;
  }
  .address {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 141%;
    display: flex;
    align-items: center;
    color: #0158d3;
    padding-right: 7px;
    padding-left: 3px;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
  }
  .exclude {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #e42e2e;
  }
`;

const PreSaleExlude = ({presaleAddress}) => {
  return (
    <Wrapper>
      <p className="m-0"></p>
      <div className="py-1">
        <span className="m-0 exclude">
          Exclude these address’s from every fee!
        </span>
      </div>
      <div className="py-1 d-flex ">
        <span className="m-0 presaleAddress">Presale Address:</span>
        <span className="d-flex">
          {" "}
          <p className="m-0 address">
            {presaleAddress}
          </p>
          <MdContentCopy color="#239419" style={{ width: "45px" }} />
        </span>
      </div>
      <div className="d-flex py-1 ">
        <span className="m-0 routerAddress">Apelab LPRouter Address:</span>
        <div className="d-flex">
          {" "}
          <span className="m-0 address">
            0x252F6C5410A2a61Cc33A6dB6ae0F0016A58a9b03
          </span>
          <MdContentCopy color="#239419" style={{ width: "45px" }} />
        </div>
      </div>
    </Wrapper>
  );
};
export default PreSaleExlude;
