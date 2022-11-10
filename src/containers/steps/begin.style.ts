import styled from "styled-components";
import { Card } from "antd";

export const CustomCard = styled(Card)`
  background: #f9f9f9;
  border-radius: 24px;
  border: #f9f9f9;
  width: 595px !important   ;
  background: white;
  border: 2px solid #f9f9f9;

  .span {
    display: flex;
    height: 420px;
    justify-content: center;
    align-items: center;
    color: #B3B3BD;
    cursor: pointer;
}
  }
`;

export const Customsteps = styled.div`
  .topthreedots {
    width: 58px;
    height: 58px;
    background: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 12px;
  }
  .parcelProduct {
    display: flex;
    background: #f9f9f9;
    border-radius: 16px;
    align-items: center;
    padding: 1%;
    gap: 5px;
    div:nth-child(3) {
      margin-left: auto;
      padding-right: 3%;
    }
  }

  .btnparcelproduct {
    width: 48px;
    height: 45px;
    background: white;
    border-radius: 12px;
    border: white;
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
    padding-bottom: 1%;
    h2 {
      font-weight: 700;
    }
  }
  .btn1 {
    width: 48px;
    height: 45px;
    background: #f9f9f9;
    border-radius: 12px;
    border: white;
  }

  .card {
    padding-top: 3%;
    display: flex;
    justify-content: center;
    gap: 5%;
  }

  display: flex;
  justify-content: center;
`;
