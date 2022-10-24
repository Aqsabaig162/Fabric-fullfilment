import styled from "styled-components";

export const CustomThreeSteps = styled.div`
  display: flex;
  justify-content: center;

  .ant-steps-item:last-child {
    flex: auto !important ;
  }

  .ant-steps-item-icon::after {
    position: absolute;
    top: 16px;
    left: 60%;
    display: block;
    width: 100%;
    height: 3px;
    background: #d9d9d9;
    content: "";
  }

  .ant-steps-item-title:after {
    display: none !important;
  }
  .ant-steps {
    padding-bottom: 50px;
    width: 60% !important;
  }
  .ant-steps-item-active .ant-steps-item-icon {
    background: #4fbf67;
    border-radius: 12px;
    width: 31.93px;
    height: 33.21px;
    border: #4fbf67;
  }
  .ant-steps-item-active .ant-steps-icon {
    color: white;
    font-weight: 700;
  }
  .ant-steps-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-steps-item-active .ant-steps-item-title {
    color: #4fbf67 !important ;
    font-weight: 800;
  }

  .ant-steps-item-wait .ant-steps-item-title {
    font-weight: 700;
  }

  .ant-steps-item-wait .ant-steps-icon {
    color: white;
    font-weight: 700;
  }
  .ant-steps-item-icon {
    background: #d9d9d9;
    border-radius: 12px;
    width: 31.93px;
    height: 33.21px;
    color: #ffffff;
    border: #d9d9d9;
  }
`;
