import styled from "styled-components";

export const CustomTable = styled.div`
.orderbtn {
    background: #6c5dd3;
    border: 2px solid #6c5dd3;
    border-radius: 16px;
    height: 36px;
    h4{
        color: white;
    }
  }
.wrapper {
    padding: 20px;
    background: white;
    border-radius: 25px;
}
.filterdiv{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filterbtn{
    width: 56px;
    height: 56px;
    background: #F9F9F9;
    border-radius: 12px;
    border:  #F9F9F9;

}

.ant-tag {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: bold;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 12px;
    /* line-height: 20px; */
    white-space: nowrap;
    /* background: #fafafa; */
    border: 3px solid #171717;
    border-radius: 10px;
    opacity: 1;
    transition: all 0.3s;
}
.ant-table-pagination {
    display: none;
    
}

.ordersize{
    color: white;
    background: black;
    cursor: pointer;
}
.ant-table-thead{
    background: white ;
}
.ant-table-cell{
    
    background: white;
}

a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    font-weight: bold;
    -webkit-text-decoration-skip: objects;
}

.orderpending{
    background: #FF9F38;
    border: none;
    color: white;
    height: 21px;
    cursor: pointer;
}

.today{
    color: #6C5DD3;
    font-weight: 600;
}

.yesterday{
    color: #F25252;
    font-weight: 600;
}
}
.date{
    color: #B3B3BD;
    font-weight: 600;
}

`;
