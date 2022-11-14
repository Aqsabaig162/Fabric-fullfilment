import styled from "styled-components";

export const Content = styled.div`
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

`;
