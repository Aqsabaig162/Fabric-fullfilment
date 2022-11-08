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
.btnmanualpick{
  display: flex;
  justify-content: center;
  
}
label.ant-radio-wrapper {
  flex-direction: row-reverse;
  width: 100%;
    display: flex;
   justify-content: space-between; 
    margin-left: 0px;


   > span:last-child{
      width:80%;
    }
   
}

.parcel {
  width: 400px;
}


.ant-radio-group{
  width: 100%;
}
.ant-space{
  width: 100%;
}
    .unlist {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 49px;

      li {
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

  .last {
    color: #ff6628;
  }
  .scndlast {
    color: #b3b3bd;
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
    border-color: #6C5DD3   !important ;
    background-color: #6C5DD3   !important  ;
}

.ant-radio-inner::after { 
  background-color: #ffffff    !important  ;

}

.ant-radio-wrapper-checked{
  background: #F9F9F9   !important  ;
  border-radius: 16px       !important   ;
  padding: 1%;
}

.ant-radio-wrapper{
  padding: 1%;
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

  .btnitems {
    display: flex;
    justify-content: center;
    width: 80%;
    padding-left: 15%;
  }
  .btn2 {
    border: 2px solid #6c5dd3;
    border-radius: 13px;
    background-color: #6c5dd3;
    font-weight: 600;
    height: 40px;
    width: 100%;
  }

 .manualpickk{

 }

`;
