import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Open Sans";
  padding: 18px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;
  .title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  .subtitle {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #1e1e1e;
    text-align: center;
    padding: 8px 0;
  }
  .warning {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #e83b1a;
  }
  @media only screen and (max-width: 1199px) {
    height: 200px;
  }
  @media only screen and (max-width: 991px) {
    .warning {
      text-align: center;
    }
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    margin-bottom: 18px;
    .warning {
      text-align: center;
    }
  }
`;

const WhiteListPresale = ({isWhitelisted}) => {
  return (
    <Wrapper>
      <div className="title">Whitelisted Presale!</div>
      <p className="subtitle">
        You wallet needs to be whitelisted to participate in this presale.
      </p>
      {isWhitelisted
      ?
      <p className="warning">Your wallet is whitelisted!</p>
    :
    <p className="warning">No your wallet is not whitelisted!</p>
    }
    </Wrapper>
  );
};
export default WhiteListPresale;
