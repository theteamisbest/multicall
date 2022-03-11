import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  margin-bottom: 15px;
  height: 48%;
  .social-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-bottom: 10px;
  }
  .emergency {
    background: #f94e4e;
    border-radius: 19.5px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    text-align: center;
    color: #fff;
    margin: 0 20px;
    margin-bottom: 10px;
    outline: none;
    border: none;
  }
  .main {
    border-top: 1px solid #e8ecf1;
    border-radius: 2.5px;
  }
  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    /* 1 */

    color: #1e1e1e;
  }
  a {
    text-decoration: none;
  }
  .audit {
    font-size: 12px;
  }
  .logo {
    width: 23px;
    height: 23px;
    border-radius: 4px;
    margin-right: 7px;
  }
  @media only screen and (max-width: 1199px) {
    .emergency {
      font-size: 12px;
      margin: 0 15px;
      margin-bottom: 15px;
    }
    height: 290px;
  }
  @media only screen and (max-width: 991px) {
    height: 270px;
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    margin-bottom: 18px;
  }
`;

const EmergencyWithDraw = () => {
  const EmergencyWithDrawArray = [
    {
      name: "Website Link",
      icon: "./images/web.svg",
      link: "#",
    },
    {
      name: "Github Link",
      icon: "./images/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Twitter Link",
      icon: "./images/twitter.svg",
      link: "https://twitter.com/",
    },
    {
      name: "Medium Link",
      icon: "./images/medium.svg",
      link: "https://medium.com",
    },
    {
      name: "Telegram Link",
      icon: "./images/telegram.svg",
      link: "https://telegram.org/",
    },
  ];
  return (
    <Wrapper className="">
      {/* <div className="d-flex justify-content-center">
        {" "}
        <button className="emergency px-3 py-2 text-center ">
          Emergency Withdraw
        </button>
      </div> */}
      <div className="d-flex justify-content-center align-items-center">
        {" "}
        <p className="social-title">Socials</p>
      </div>
      <div className="main-container">
        {" "}
        {EmergencyWithDrawArray.map((el, i) => (
          <a
            href={el.link}
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <div className="d-flex justify-content-between align-items-center py-1  main">
              <span className="name">{el.name}</span>

              <img src={el.icon} alt="" />
            </div>
          </a>
        ))}
        <a
          href="/#"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
        >
          <div className="d-flex justify-content-between align-items-center py-1  main">
            <div className="d-flex align-items-center">
              <img
                src="./images/presaleInfoLogo.svg"
                alt="#"
                className="logo"
              />
              <span className="name">Audit by...</span>
            </div>
            <p className="audit">Audit Certificate</p>
          </div>
        </a>
        <a
          href="/#"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
        >
          <div className="d-flex justify-content-between align-items-center py-1  main">
            <div className="d-flex align-items-center">
              <img
                src="./images/presaleInfoLogo.svg"
                alt="#"
                className="logo"
              />
              <span className="name">KYC'd by...</span>
            </div>
            <p className="audit">KYC Certificate</p>
          </div>
        </a>
      </div>
    </Wrapper>
  );
};
export default EmergencyWithDraw;
