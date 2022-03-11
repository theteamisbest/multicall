import React from "react";
import styled from "styled-components";

import MostViewed from "../Components/DifiChange/MostViewed";
import Token from "../Components/DifiChange/Token";
import TradeToken from "../Components/DifiChange/TradeToken";

import TokenPrice from "../Components/DifiChange/TokenPrice";
import ChitAndChart from "../Components/DifiChange/ChatAndChart";
const Wrapper = styled.div`
  height: 100%;
`;

const DifiChange = () => {
  const mostViewedArray = [
    {
      title: "Most Viewed",
      icon: "./images/mostviewed.svg",
    },
    {
      title: "#1 APE",
      icon: "./images/2.svg",
    },
    {
      title: "#2 APE",
      icon: "./images/3.svg",
    },
    {
      title: "#3 APE",
      icon: "./images/4.svg",
    },
    {
      title: "#4 APE",
      icon: "./images/5.svg",
    },
    {
      title: "#5 APE",
      icon: "./images/6.svg",
    },
    {
      title: "#6 APE",
      icon: "./images/7.svg",
    },
    {
      title: "#7 APE",
      icon: "./images/8.svg",
    },
    {
      title: "#8 APE",
      icon: "./images/9.svg",
    },
  ];
  return (
    <Wrapper>
      <MostViewed mostViewedArray={[...mostViewedArray]} />
      <Token />

      <ChitAndChart />
      <TradeToken />
      <TokenPrice />
    </Wrapper>
  );
};
export default DifiChange;
