import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import { GrayBtn } from '../../components/GreyButton';
import { LayoutTop } from '../../components/LayoutTop';
import { ProductDetails } from '../../components/ProductDetails';
import { ThreeSteps } from '../../components/ThreeSteps';
import { CustomCard, Customsteps } from './begin.style';
import {Chips, RightTopBtn, Separateline, Threedots, TopLeftBtn} from './beginsvgs';



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
      <LayoutTop   
        title= {"PXGAI08942"}
       leftbutton = { <TopLeftBtn /> }
       rightbuttonsteps = { <RightTopBtn />  }
        />

      <div className='wrapper'> 
      <div className='stepsdiv'>
       <ThreeSteps />
      <span className='line' > <Separateline /> </span>
      <div className='card'>
      <CustomCard style={{ width: 300 }}>
        <div className='align'>
        <h2>Items</h2>
        <Button type='primary' className='btn1' > <Threedots /> </Button>
        </div>
       <div className='products'>
       <p> <ProductDetails p1= {'SKU: 1965322809631234'}
       p2 = {'Color: Navy Blue'}
       p3 = {' Size: 48 '}
       chips = { <Chips /> }
       /> </p>
      <p><ProductDetails p1= {'SKU: 1965322809631234'}
       p2 = {'Color: Navy Blue'}
       p3 = {' Size: 48 '}
       chips = { <Chips />}
       />
       </p>
        <p>
        <ProductDetails p1= {'SKU: 1965322809631234'}
       p2 = {'Color: Navy Blue'}
       p3 = {' Size: 48 '}
       chips = { <Chips />}
       />
        </p>
       </div>
       
        </CustomCard>
       </div>
       </div>
      </div>
      <GrayBtn />
      </Customsteps>
      
    </>

    )
}
