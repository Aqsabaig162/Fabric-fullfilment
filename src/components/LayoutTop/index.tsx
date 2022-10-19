import { Button } from 'antd'
import { title } from 'process';
import React from 'react'
import { CustomTopLayout } from './layouttop.style'

interface Props {
    title : string ;
    rightbuttontable?:  any;
    rightbuttonsteps?:  any;
    buttontext? : string;
    leftbutton? : any;
}

export const LayoutTop = (props: Props) => {
 const {title , buttontext ,  leftbutton , rightbuttonsteps, rightbuttontable} = props;

    return (
        <CustomTopLayout>
              <div className="top">
                <div className='lefttop'>
                <div> {leftbutton} </div>  
                <div> <h1>{title}</h1>  </div>
                </div>  
              <Button type="primary" className="orderbtn">
               
                <span> 
                 {buttontext} {rightbuttontable}
                </span>
              </Button>
             {rightbuttonsteps}
            </div>
    </CustomTopLayout>
    )
}
