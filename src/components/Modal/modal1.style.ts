import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal1 = styled(Modal)`
  .counter {
    width: 280px;
    height: 35px;
    background: #f9f9f9;
    border-radius: 8px;
    padding-bottom: 20px;
  }
  h2 {
    display: flex;
    justify-content: center;
    font-weight: 700;
  }
  label.ant-radio-wrapper {
    flex-direction: row-reverse;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 0px;

    > span:last-child {
      width: 80%;
    }
  }

  .parcel {
    width: 400px;
  }

  .ant-radio-group {
    width: 100%;
  }
  .ant-space {
    width: 100%;
  }

  .ant-modal-content {
    border-radius: 24px;
    display: flex;
    justify-content: center;
  }
  .contentt {
    // padding-left: 20px;
    padding-top: 25px;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: #6c5dd3 !important ;
    background-color: #6c5dd3 !important  ;
  }

  .ant-radio-inner::after {
    background-color: #ffffff !important  ;
  }

  .ant-radio-wrapper-checked {
    background: #f9f9f9 !important  ;
    border-radius: 16px !important   ;
    padding: 1%;
  }

  .ant-radio-wrapper {
    padding: 1%;
    align-items: center;
  }
  .ant-radio {
    padding-right: 2%;
  }
  .contentt > p {
    display: flex;
    justify-content: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .btn1 {
    border: 2px solid #6c5dd3;
    border-radius: 13px;
    color: #6c5dd3;
    font-weight: 600;
    height: 40px;
  }

  .btn2 {
    border: 2px solid #6c5dd3;
    border-radius: 13px;
    background-color: #6c5dd3;
    font-weight: 600;
    height: 40px;
    width: 100%;
  }

  .manualpickk {
  }
`;
