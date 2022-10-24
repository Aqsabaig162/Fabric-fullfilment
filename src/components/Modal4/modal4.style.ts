import styled from "styled-components";
import { Modal } from "antd";
export const CustomModal4 = styled(Modal)`
  .ant-modal-content {
    overflow: auto;
    border-radius: 24px;
    width: 75%;
    height: 10%;
    display: flex;
    justify-content: center;
  }
  .contentt {
  }
  .counter {
    width: 280px;
    height: 35px;
    background: #f9f9f9;
    border-radius: 8px;
    padding-bottom: 20px;
  }
  .Modal4style {
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .counter {
    Button {
      background: #ffffff;
      border-radius: 8px;
      color: black;
      font-weight: bolder;
      border: white;
    }
    display: flex;
    justify-content: space-between;
    padding: 2px;
  }

  .contentt > p {
    display: flex;
    justify-content: center;
    width: max-content;
  }

  h2 {
    display: flex;
    justify-content: center;
    font-weight: 700;
  }

  .btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
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
  }
`;
