import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal3 = styled(Modal)`
  .unlist {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 49px;

  li{
    padding-left: 10px;
    cursor: pointer;
  }
}
  }
  .selected {
    width: 350px;
    height: 60px;
    display: flex;
    font-weight: 700;
    font-size: 15px;
    align-items: center;
    background: #f9f9f9;
    border-radius: 16px;
    
  }
  .notselected {
    width: 350px;

    height: 64px;
    height: 60px;
    display: flex;
    font-weight: 700;
    font-size: 15px;
    align-items: center;
   
    border-radius: 16px;
  }

.last{
  color: #FF6628;
}
  .scndlast{
    color: #B3B3BD;
  }
  .ant-modal-content {
    
    border-radius: 24px;
    width: 75%;
    height: 10%;
    display: flex;
    justify-content: center;
  }
  .contentt {
    padding-left: 20px;
    padding-top: 25px;
  }

  .contentt > p {
    display: flex;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    font-weight: 700;
  }

  .btn {
    display: flex;
    justify-content: center;
   
  }

 

  .btn2 {
    border: 2px solid #6c5dd3;
    border-radius: 13px;
    background-color: #6c5dd3;
    font-weight: 600;
    height: 40px;
    width: 350px;
  }
`;
