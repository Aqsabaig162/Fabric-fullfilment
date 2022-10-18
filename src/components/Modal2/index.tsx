import { Button } from 'antd';
import React from 'react'
import { CustomModal2 } from './modal2.style'


interface Props {
    issubModalOpen : boolean ,
    handlesubOk : any  ,
     handlesubCancel : any , 
}

export const Modal2 = (props: Props) => {
    const { issubModalOpen , handlesubOk , handlesubCancel} = props;

    return (
        <CustomModal2  open={issubModalOpen} onOk={handlesubOk} onCancel={handlesubCancel} footer={null}  >
        <div className='contentt'>
        <h2>Return to main screen</h2>
        <p>This order is in progress by another associate.</p>
        <div className='btn'>
        <Button type='primary' className='btn2'  onClick ={handlesubCancel}> Return </Button>
        </div>
        </div>
        </CustomModal2>
    )
}
