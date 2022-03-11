import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import ScrollToBottom from "react-scroll-to-bottom";
const Wrapper = styled.div`
  .button {
    font-family: "Open Sans";
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.02);
    border-radius: 23.5px;
    outline: none;
    border: none;

    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 37px;

    color: #0158d3;
    margin: 0 4px;

    outline: none;
    focus: none;
    padding: 3px 15px;

    border: 1px solid #0158d3;
    background: #fff;
    color: #0158d3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    font-family: " Open Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;

    color: #ffffff;
    background: #2f88ff;
    border-radius: 15px 15px 0px 0px;
    padding: 15px 14px;
    margin: 0 -8px;
    margin-top: -8px;
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
  .contains {
    background: #ffffff;
    border-radius: 15px;
    height: 480px;
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  .chat-container {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 15px;
  }
  .chartbody {
    height: 425px;
    overflow-y: scroll;
  }
  .image {
    width: 30px;
  }
  .own {
    background: #2f88ff;
    padding: 15px;
    border-radius: 19.5px 19.5px 2px 19.5px;
    color: #fff;
    font-size: 12px;
  }
  .others {
    background: #f1f5fb;
    border-radius: 19.5px;
    padding: 15px;
    font-size: 12px;
  }
  .message {
    width: 80%;
  }
  .chart-footer {
    width: 100%;
    background: #dcebff;
    border-radius: 9px;
    padding: 8px 8px;
  }
  .chart-footer input {
    width: 90%;

    padding: 12px 12px;
    border: 0;
    outline: 0;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 141%;
    /* identical to box height, or 17px */

    display: flex;
    align-items: center;

    color: #9c9c9c;
  }
  .input-container {
    width: 60%;
    background: #ffffff;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
  }
  .icon-container {
    width: 40%;
  }
  .icon-container img {
    width: 25px;
  }
`;

const ChatandChart = () => {
  const [chartArray, setChartArry] = useState([
    {
      image: "./images/2.svg",
      message: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      image: "./images/3.svg",
      message: "Lorem Ipsum is simply ",
    },
    {
      image: "./images/7.svg",
      message: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      image: "",
      message: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      image: "./images/5.svg",
      message:
        "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printingLorem Ipsum is ",
    },
  ]);
  const [value, setValue] = useState("");
  const takeValue = (e) => {
    setValue(e.target.value);
  };
  const Send = () => {
    setChartArry((prev) => [...prev, { image: "", message: value }]);
    setValue("");
  };

  return (
    <Wrapper>
      <Col xs={11} className="mx-auto">
        <Row className="py-4">
          <Col md={7}>
            <button className="button active">
              <BsArrowUp size="25" /> Vote Now <BsArrowDown size="25" />
            </button>
            <div className="contains"></div>
          </Col>
          <Col md={5} classsName="px-2">
            <div className="chat-container px-2 py-2">
              <div className="header  ">Global Chat</div>
              <ScrollToBottom className="chartbody" id="chartbody">
                {chartArray.map((el, i) => (
                  <div
                    key={i}
                    style={{ marginLeft: !el.image && "auto" }}
                    className={
                      el.image
                        ? "py-2 d-flex message"
                        : "py-2 d-flex justify-content-end message"
                    }
                    s
                  >
                    {el.img && (
                      <div style={{ marginRight: "10px" }}>
                        {" "}
                        <img src={el.image} alt="#" className="image" />
                      </div>
                    )}
                    <span className={!el.image ? "own" : "others"}>
                      {el.message}
                    </span>
                  </div>
                ))}
              </ScrollToBottom>
              <div className="chart-footer d-flex justify-content-between">
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Write here"
                    value={value}
                    onChange={takeValue}
                  />
                  <IoMdSend
                    color="2F88FF"
                    size="20"
                    style={{ cursor: "pointer" }}
                    onClick={Send}
                  />
                </div>

                <div className="d-flex justify-content-around icon-container px-2">
                  <img src="./images/emoji.svg" alt="#" />
                  <img src="./images/document.svg" alt="#" />
                  <img src="./images/photo.svg" alt="#" />
                  <img src="./images/video.svg" alt="#" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default ChatandChart;
