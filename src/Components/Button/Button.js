import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
const Wrapper = styled.div`
  .button {
    outline: 0;
    border: 0;
    width: 100%;
    padding: 8px 15px;
    background: #b9d7ff;
    border-radius: 32px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #3c8bf7;

    /* Inside Auto Layout */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    color: #fff;
  }
`;

const Button = (props) => {
  return (
    <Wrapper>
      <button
        className="button"
        style={{
          background: props.background,
          color: props.color,
          padding: props.padding,
          margin: props.margin,
          fontSize: props.fontSize,
        }}
      >
        {props.children}
      </button>
    </Wrapper>
  );
};
export default Button;
