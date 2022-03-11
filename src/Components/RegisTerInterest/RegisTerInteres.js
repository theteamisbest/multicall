import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CgArrowBottomLeft } from "react-icons/cg";
const Wrapper = styled.div`
  .main-wrapper {
    height: 100vh;
    position: relative;
    width: 100%;
  }
  .wrapper {
    background: #ffffff;

    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.02);
    border-radius: 50px;
    padding: 18px 50px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -73%);
    z-index: 1;
  }
  .wrapper2 {
    transform: translate(-50%, -100%);
    position: relative;
  }
  .bottom {
    position: absolute;
    right: 12%;
    top: 18px;
  }

  .title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #002861;
  }
  .tagline {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    /* 2 */

    color: #3d3d3d;
  }
  .whyChoose {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;

    text-decoration: none;

    color: #002861;
  }
  .input {
    background: #f1f5fb;
    border: 1px solid #c4d7f0;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 4px 10px;
    outline: none;
  }
  label {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 25px;
    display: flex;
    align-items: center;

    /* 7 */

    color: #002861;
  }
  .overlay {
    position: absolute;
    top: 0;

    left: 0;

    width: 100%;
    height: 133vh;
    background: rgba(0, 0, 0, 0.7);
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
    font-size: 15px;
    line-height: 30px;

    color: #0158d3;
    margin: 0 4px;
    margin-top: 16px;
    outline: none;
    focus: none;
    padding: 3px 0;

    border: 1px solid #0158d3;
    background: #fff;
    color: #0158d3;
    min-width: 160px;
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

  @media only screen and (max-width: 1700px) {
    .bottom {
      position: absolute;
      right: 7%;
      top: 15px;
    }
    .wrapper {
      padding: 18px 30px;
    }
  }
  @media only screen and (max-width: 1700px) {
    .bottom {
      position: absolute;
      right: 4%;
      top: 18px;
    }
  }
  @media only screen and (max-width: 1400px) {
    .bottom {
      position: absolute;
      right: 6%;
      top: 18px;
    }
  }
  @media only screen and (max-width: 1199px) {
    .button {
      font-size: 18px;
      line-height: 28px;
      padding: 6px 0px;
    }
    .tagline {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 991px) {
    .button-container {
    }
    .button {
      font-size: 12px;
      padding: 3px 0px;
      min-width: 110px;
    }
    .bottom {
      position: absolute;
      right: 7%;
      top: 18px;
    }
    .title {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 767px) {
    .bottom {
      display: none;
    }
    .title {
      font-size: 24px;
    }
    .bottom {
      position: absolute;
      right: 18px;
      top: 15px;
    }
  }

  @media only screen and (max-width: 520px) {
    .main-wrapper {
      width: 90%;
      margin: 0 auto;
    }
    .wrapper {
      border-radius: 30px;
    }
  }
  @media only screen and (max-width: 450px) {
    .wrapper {
      padding: 18px 20px;
    }
  }
  @media only screen and (max-width: 400px) {
    .button {
      width: 100px;
    }
  }
`;

const RegisterInterest = ({ setRegisterInteres }) => {
  const [projectName, setProjectName] = useState(null);
  const [projectaddress, setProjectAddress] = useState(null);
  const [projectTelegram, setProjectTelegram] = useState(null);
  const [devusername, setDevusername] = useState(null);
  const [success, setSuccess] = useState(false);

  const setActive = (e) => {
    const allButton = document.querySelectorAll(".button");

    allButton.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <Wrapper>
      {!success && (
        <div className="main-wrapper ">
          <Col
            xs={11}
            sm={9}
            md={8}
            lg={6}
            xl={5}
            xxl={4}
            className="d-flex justify-content-center align-items-center flex-column wrapper"
          >
            <h5 className="title ">Register Interest</h5>
            <p className="tagline ">
              Register your projects interest or simply view the demo, We aim to
              be live at the end of January.
            </p>
            <h5 className="whyChoose ">
              <a href="/" className="whyChoose">
                Why choose ApeLab?
                <AiOutlineExclamationCircle style={{ margin: "0 5px" }} />
              </a>
            </h5>

            <div className="w-100">
              {" "}
              <div className="d-flex flex-column py-1">
                <label htmlFor="ProjectName">Project Name</label>
                <input
                  type="text"
                  id="ProjectName"
                  className="input"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column py-1">
                <label htmlFor="ProjectContractAddress">
                  Project Contract Address
                </label>
                <input
                  type="text"
                  id="ProjectContractAddress"
                  value={projectaddress}
                  className="input"
                  onChange={(e) => setProjectAddress(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column py-1">
                <label htmlFor="ProjectTelegram">Project Telegram</label>
                <input
                  type="text"
                  id="ProjectTelegram"
                  className="input"
                  value={projectTelegram}
                  onChange={(e) => setProjectTelegram(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column py-1">
                <label htmlFor="DevUsername">Dev username</label>
                <input
                  type="text"
                  id="Devusername"
                  className="input"
                  value={devusername}
                  onChange={(e) => setDevusername(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex button-container">
              <button
                className="button active"
                onClick={(e) => {
                  setActive(e);
                  setRegisterInteres(false);
                }}
              >
                View Demo
              </button>
              <button
                className="button"
                onClick={(e) => {
                  setActive(e);
                  setSuccess((prev) => !prev);
                }}
              >
                Submit Interest
              </button>
            </div>
          </Col>
        </div>
      )}
      {success && (
        <div className="main-wrapper ">
          <Col
            xs={11}
            sm={10}
            md={9}
            lg={8}
            xl={6}
            xxl={5}
            className="d-flex justify-content-center align-items-center flex-column wrapper wrapper2"
          >
            <h5 className="title ">
              Thank you for your <br /> Interest!
            </h5>
            <p className="tagline py-1">
              To stay up to date with development join our invite only network
              channel for regular updates..
            </p>

            <div className="d-flex button-container">
              <button
                className="button active"
                onClick={(e) => {
                  setActive(e);
                  setRegisterInteres(false);
                }}
              >
                View Demo
              </button>
              <button className="button" onClick={setActive}>
                Network channel
              </button>
            </div>
            <p className="bottom">
              <CgArrowBottomLeft fontSize="22px" />
            </p>
          </Col>
        </div>
      )}
      <div className="overlay" onClick={() => setRegisterInteres(false)}></div>
    </Wrapper>
  );
};
export default RegisterInterest;
