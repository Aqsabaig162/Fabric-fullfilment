import styled from "styled-components";
import { Card } from "antd";

export const CustomCard = styled(Card)`
  background: #f9f9f9;
  border-radius: 24px;
  border: #f9f9f9;
  width: 595px !important   ;
`;

export const Customsteps = styled.div`
  .topthreedots {
    width: 58px;
    height: 58px;
    background: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 12px;
  }

  display: flex;
  flex-direction: column;

  .wrapper {
    padding: 20px;
    background: white;
    border-radius: 25px;
  }

  .products {
    padding-top: 15px;
    p {
      cursor: pointer;
    }
  }

  .align {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
    }
  }
  .btn1 {
    width: 48px;
    height: 45px;
    background: #ffffff;
    border-radius: 12px;
    border: white;
  }

  .card {
    padding-top: 3%;
  }

  display: flex;
  justify-content: center;
`;
