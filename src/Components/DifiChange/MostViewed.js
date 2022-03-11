import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
const Wrapper = styled.div`
  display: grid;

  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  border-radius: 19.5px;

  gap: 5px 0px;

  .item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 8px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background: #ffffff;
    height: 50px;
  }
  .circle {
    width: 15px;
    height: 15px;
    background: #2f88ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50%;
    font-size: 10px;
  }
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const MostViewed = ({ mostViewedArray }) => {
  return (
    <Col xs={11} className="mx-auto ">
      <Wrapper>
        {mostViewedArray.map((el, i) => (
          <div
            className="item"
            key={i}
            style={{
              borderRadius:
                i === 8
                  ? " 0px 19.5px 19.5px 0px"
                  : i === 0 && " 19.5px 0px 0px 19.5px",
              borderRight: i === 0 && "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <span>{el.title}</span>
            {/* <img
              src={el.icon}
              alt="#"
              style={{ marginLeft: i === 0 && "3px" }}
            /> */}
            {el.icon2 ? (
              <>
                <img src={el.icon2} alt="#" style={{ marginLeft: "6px" }} />
                <div className="circle" style={{ marginLeft: "6px" }}>
                  {" "}
                  ?
                </div>
              </>
            ) : (
              <img src={el.icon} alt="#" style={{ marginLeft: "6px" }} />
            )}
          </div>
        ))}
      </Wrapper>
    </Col>
  );
};
export default MostViewed;
