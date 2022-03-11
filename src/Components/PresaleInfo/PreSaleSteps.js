import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 100%;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    color: #1e1e1e;
  }
  .main {
    border-bottom: 1px solid #e8ecf1;
    border-radius: 2.5px;
  }
  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    /* 1 */

    color: #1e1e1e;
  }
  .warning {
    font-style: normal;
    font-weight: 300;
    font-size: 8px;
    line-height: 8px;
    display: flex;
    align-items: center;

    color: #ff0000;
  }
  @media only screen and (max-width: 1199px) {
    .name {
      font-size: 10.5px;
    }
    .warning {
      font-size: 7px;
    }
  }
  @media only screen and (max-width: 991px) {
    .name {
      font-size: 12px;
    }
  }
`;

const PresaleSteps = () => {
  const presaleStepsArray = [
    {
      image: "./images/presalesteps1.svg",
      name: "Exclude presale from fee’s",
      warning: "Only for liquidity generators!",
    },
    {
      image: "./images/presalesteps2.svg",
      name: "Remove Fees",
      warning: "Only for liquidity generators!",
    },
    {
      image: "./images/presalesteps3.svg",
      name: "Deposit Tokens",
    },
    {
      image: "./images/presalesteps4.svg",
      name: "Finalise Presale",
    },
    {
      image: "./images/presalesteps5.svg",
      name: "Burn Tokens",
      warning: "Optional!",
    },
    {
      image: "./images/presalesteps6.svg",
      name: "Enable fee’s",
      warning: "Only for liquidity generators!",
    },
    {
      image: "./images/presalesteps7.svg",
      name: "Withdraw Liquidity",
    },
  ];
  return (
    <Wrapper>
      {" "}
      <p className="title">Presale Steps</p>
      <div>
        {presaleStepsArray.map((el, i) => (
          <div className="d-flex main align-items-start py-2">
            <img src={el.image} alt={`Steps${i + 1}`} />
            <div className="d-flex flex-column mx-2 ">
              <p className="m-0 name">{el.name}</p>
              {el.warning && <span className="warning">{el.warning}</span>}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default PresaleSteps;
