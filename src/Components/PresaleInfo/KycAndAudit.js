import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 15px;
  font-family: "Open Sans";
  height: 33.5%;

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    /* 1 */

    color: #1e1e1e;
  }
  .name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #1e1e1e;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;

    color: #3d3d3d;
  }
  .link {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    /* 5 */

    color: #0158d3;
    text-decoration: none;
  }
  @media only screen and (max-width: 1199px) {
    height: 290px;
  }
  @media only screen and (max-width: 991px) {
    height: 270px;
    padding: 10px 18px;
    .logo {
      width: 45px;
    }
    .tagline {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    margin-bottom: 18px;
  }
`;

const KycAndAudit = () => {
  const KycAndAuditArray = [
    {
      title: "KYC",
      name: "Company Name",
      tagline: "This project is KYC by the....",
      link: "KYC lInk",
    },
    {
      title: "Audit",
      name: "Company Name",
      tagline: "This project is KYC by the....",
      link: "Audit lInk",
    },
  ];
  return (
    <Wrapper className="">
      {KycAndAuditArray.map((el, i) => (
        <div
          className="py-3"
          style={{ borderBottom: i === 0 && "1px solid  #E8ECF1" }}
        >
          <span className="title py-1 py-lg-2">{el.title}</span>
          <div className="d-flex " key={i}>
            <img src="./images/presaleInfoLogo.svg" alt="#" className="logo" />
            <div className="d-flex flex-column px-2">
              <span className="name">{el.name}</span>
              <span className="tagline">{el.tagline}</span>
              <a className="link" href="/">
                {el.link}
              </a>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default KycAndAudit;
