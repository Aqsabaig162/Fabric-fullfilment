import { Button, message, Steps } from 'antd';

import React, { useState } from 'react'
import { CustomThreeSteps } from './steps.style';
import { StepsLine } from './threestepssvgs';


interface Props {
    
}

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

export const ThreeSteps = (props: Props) => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
    return (
     <CustomThreeSteps>
         <Steps current={current}  responsive = {true} >
         
          {steps.map(item => (
            <Step key={item.title}    title={item.title} />
            
          ))
          }
          <StepsLine/>
        </Steps>
        </CustomThreeSteps>
        
    )
}
