import React from "react";
import Switch from "react-switch";
import styled from "styled-components";

const Wrapper = styled.div`
  .react-switch-bg {
    background: #f4f4f4 !important;
    border: 1px solid #79b974;
    border-radius: 7px;
    height: 22px !important;
    width: 48px !important;
  }
  .react-switch-handle {
    height: 20px !important;
  }
  .mySwitch .react-switch-handle {
    background: #2fc322 !important;
    transform: translateX(21px) !important;
  }
  .yourSwitch .react-switch-handle {
    background: #f94e4e !important;
  }
`;

const MySwitch = ({ checked, setChecked,ChangeWhitelistStatus }) => {
  return (
    <Wrapper>
      <label>
        <Switch
          className={checked ? "mySwitch" : "yourSwitch"}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => { ChangeWhitelistStatus()
            setChecked((prev) => !prev)}}
          checked={checked}
          boxShadow="none"
          activeBoxShadow="none"
        />
      </label>
    </Wrapper>
  );
};

export default MySwitch;
