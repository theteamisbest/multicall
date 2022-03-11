import React, { useState } from "react";
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
  .header {
    padding: 12px 0;
  }
  .main {
    background: #ffffff;
    border-radius: 11px;
    position: absolute;
    z-index: 1600;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 130%;
    /* or 19px */

    display: flex;
    align-items: center;

    /* 7 */

    color: #002861;
  }
  .name {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* 7 */

    color: #002861;
  }
  .input-container {
    margin: 6px 0;
    background: #f1f5fb;

    border: 1px solid #c4d7f0;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;
  }

  .input {
    border: 0;
    outline: 0;
    font-size: 12px;
    padding: 7px 8px;
    background: #f1f5fb;
  }
  .textarea {
    background: #f1f5fb;
    border: none;
    resize: none;
    outline: none;
  }
  .warning {
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 11px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #ff4e4e;
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
    font-size: 14px;
    line-height: 25px;

    color: #0158d3;
    margin: 0 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;
    focus: none;
    padding: 3px 0;

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
  @media only screen and (max-width: 810px) {
    .main {
      position: fixed;
      top: 50%;
    }
  }

  @media only screen and (max-width: 767px) {
    .tagline {
      font-size: 14px;
    }

    .name {
      font-size: 13px;
    }
    .input {
      font-size: 12px;
    }
    .button {
      font-size: 12px;
      padding: 0px;
      width: 120px;
    }
  }
`;

const PreaSaleDetails = ({ setModal }) => {
  const createLauncPadArray = [
    {
      icon: <BiUserCircle />,
      name: "Logo Link ( https URL and must end with a supported image format)",
      placeholeder: "Enter contact address",
      warning:
        "You can use a website like httploremipsum is upload your image then copy the dress herein the same, You can use",
    },
    { name: "Github Link", placeholeder: "http://kanbvnsbns.com ", link: true },

    {
      name: "Twitter Link",
      placeholeder: "http://kanbvnsbns.com ",
      link: true,
    },
    {
      name: "Rapid Link",
      placeholeder: "http://kanbvnsbns.com ",
      link: true,
    },
    {
      name: "Telegram Link",
      placeholeder: "http://kanbvnsbns.com ",
      link: true,
    },
    {
      name: "Project Description",
      placeholeder: "Lorem ipsum is a dummy text",
      textarea: true,
    },
    {
      name: "Any Update You Want To Provide",
      placeholeder: "Lorem ipsum is a dummy text ",
    },
  ];
  return (
    <Wrapper className="py-2">
      <Col
        xs={11}
        sm={9}
        md={8}
        lg={6}
        xl={5}
        xxl={4}
        className="mx-auto header main px-4 "
      >
        <div>
          {" "}
          <IoIosCloseCircleOutline
            style={{
              display: "block",
              marginLeft: "auto",
              cursor: "pointer",
            }}
            onClick={() => setModal(false)}
          />
        </div>
        <span className="tagline py-3 d-block">
          Please fill out the additional information below to display it on your
          presale. (Information in this section is optional but a description
          and logo link is recommended
        </span>
        <div className="d-flex justify-content-center align-items-center flex-column text-center "></div>
        {createLauncPadArray.map((el, i) => (
          <div key={i} className="py-0">
            <p className="name ">{el.name}</p>
            <div className="input-container">
              {!el.textarea && (
                <>
                  {" "}
                  {el.icon && <BiUserCircle size="18px" color="#3D3D3D" />}
                  <input
                    className="input w-100"
                    style={{ textDecoration: el.link && "underline" }}
                    placeholder={el.placeholeder}
                  />
                </>
              )}
              {el.textarea && (
                <textarea
                  placeholder={el.placeholeder}
                  id="w3review"
                  name="w3review"
                  rows="3"
                  cols="50"
                  className="w-100 textarea px-2"
                ></textarea>
              )}
            </div>
            {el.warning && <p className="warning m-0">{el.warning}</p>}
          </div>
        ))}
        <div className="d-flex">
          <button className="button active" type="submit">
            Submit
          </button>
        </div>
      </Col>
    </Wrapper>
  );
};
export default PreaSaleDetails;
