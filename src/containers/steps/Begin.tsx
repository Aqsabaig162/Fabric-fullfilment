import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';

import { CustomCard, Customsteps } from './begin.style';
import {Separateline, Threedots} from './beginsvgs';


const { Step } = Steps;
const steps = [
    {
      title: 'Pick',
      content: 'First-content',
    },
    {
      title: 'Pack',
      content: 'Second-content',
    },
    {
      title: 'Ship',
      content: 'Last-content',
    },
  ];
  
interface Props {
    
}

export const Begin = (props: Props) => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

    return (
      <>
      <Customsteps>
      <div className='stepsdiv'>
        <Steps current={current}  responsive = {true} >
          
        {steps.map(item => (
          <Step key={item.title}   title={item.title} />
        ))}
      </Steps>
      <span className='line' > <Separateline /> </span>
      <div className='card'>
      <CustomCard style={{ width: 300 }}>
        <div className='align'>
        <h2>Items</h2>
        <Button type='primary' className='btn1' > <Threedots /> </Button>
        </div>
       
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        </CustomCard>
  
      </div>
     
      </div>
      </Customsteps>
    </>

    )
}
