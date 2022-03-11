import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Wrapper = styled.div`
  background: #f1f5fb;
  font-family: "Open Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .header {
    padding: 12px 0;
  }
  .main {
    background: #ffffff;
    border-radius: 11px;
    position: absolute;
    z-index: 1600;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
  }

  .title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #1e1e1e;
  }
  .warning {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 141%;
    color: #e83b1a;
  }
  .text-area {
    font-size: 14px;
    background: #f1f5fb;
    border: 1px solid #b8cce9;
    box-sizing: border-box;
    border-radius: 19.5px;
    resize: none;
    width: 100%;
    padding: 15px;
    outline: none;
  }
  .recomend {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 11px;
    display: flex;
    align-items: center;

    color: #000000;
    text-align: center;
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
    .button {
      font-size: 12px;
      padding: 3px 0px;
      min-width: 110px;
    }
  }
  @media only screen and (max-width: 810px) {
    .main {
      top: 10%;
    }
  }
  @media only screen and (max-width: 609px) {
    .main {
      top: 10%;
    }
  }
  @media only screen and (max-width: 520px) {
    .main {
      top: 50%;
    }
  }

  @media only screen and (max-width: 400px) {
    .button {
      width: 100px;
    }
  }
`;

const PreaSaleDetails = ({ setWhitelist,active,account,presaleContract }) => {
  const setActive = (e) => {
    const allButton = document.querySelectorAll(".button");

    allButton.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };

  const allAddressRef = useRef(null);

  const addWhitelist = async () => {
    try {
      const _arrayOfAddress = allAddressRef.current.value.split("\n");
      if (_arrayOfAddress.length > 0) {
        await presaleContract.methods.addWhitelist(_arrayOfAddress).send({from:account});
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeWhitelist = async () => {
    try {
      const _arrayOfAddress = allAddressRef.current.value.split("\n");
      if (_arrayOfAddress.length > 0) {
        await presaleContract.methods.removeFromWhitelist(_arrayOfAddress).send({from:account});
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Wrapper className="">
      <Col
        xs={11}
        sm={9}
        md={8}
        lg={6}
        xl={5}
        xxl={4}
        className="mx-auto header main  "
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <p className="title">Add/Remove Whitelist.</p>
            <p className="warning">Make sure there are no duplicates.</p>
          </div>
          <IoIosCloseCircleOutline
            style={{
              display: "block",
              marginLeft: "auto",
              cursor: "pointer",
            }}
            size={24}
            onClick={() => setWhitelist(false)}
          />
        </div>
        <textarea
        ref={allAddressRef}
          name=""
          id=""
          rows="6"
          className="text-area w-100 mt-3"
          placeholder="Enter addresses seperated by a new line."
        ></textarea>
        <div className="d-flex justify-content-center align-items-center my-3">
          <p className="recomend "> We Recommend only adding 200 each time.</p>
        </div>
        <div className="d-flex   justify-content-center">
          <button
            className="button active"
            onClick={addWhitelist}
          >
            Add
          </button>
          <button className="button" onClick={removeWhitelist}>
            Remove
          </button>
        </div>
      </Col>
    </Wrapper>
  );
};
export default PreaSaleDetails;
