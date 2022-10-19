import  Bigrectangle from '../../images/BigRectangle.png';

import  smallrectangle from '../../images/smallrectangle.png';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { CustomSider } from './sidebar.style';
import { ArrowUp, Phone, Mail, Line , Location } from './rightsidersvgs';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setshowsidebar } from '../../features/showsidebarslice';


export interface SideBarProps {
}

export const Productdetails = (props: any) => {
  const { showsidebar } = useAppSelector((state) => state);
  return(
    <span className='prodspan'>
    <p className='imgsmall '> <img src=  {smallrectangle}    /> </p>
    <span className='Pdata'>
    <div>
      <h3>Product Name</h3>
      <p>WEH34T2</p>
    </div>
    <div><ArrowUp /></div>
    </span>

  </span>

  )

}




 export const SideBar2 =  (props: any) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const Begin = () => {

    navigate('/steps')
   }
  return (
    <div >
       <CustomSider width={250} className="site-layout-background" theme='light' style={{ height: '100vh'}} >
       <h1>Order Details</h1>

       <div className='sidetop'>
        <h3>
        Jamie Jones
        </h3>
        
        <p>  <a><Phone/></a> (456) 8929 1231</p>
        <p> <a><Mail /></a> jamie.jones@domain.com</p>
        <p>  <a> <Location /></a>  500 7th Avenue, Manhatten, New York, NY, 10018</p>
       </div>
       <Line />
        
        <div className='secondside'>
          <p >Items</p>
         <Productdetails />
         <img className='bigrect' src=  {Bigrectangle}  />
        <div className='lists'>
          <ul className='ulli'>
          <li>Weight</li>
          <li>Size (L x W x H)</li>
          <li>Color</li>
          <li>Price</li>
        </ul>
        <ul className='ulli2'>
          <li>0.8 lbs</li>
          <li>10’’ x 14’’ x 8’’</li>
          <li>Magenta</li>
          <li>$10.99</li>
        </ul>
         </div>
         
        </div>
        
        <Line />
         <Productdetails />
         <Line />
        <Button type='primary'  className="beginbtn" onClick={ ()=>  { Begin(); dispatch(setshowsidebar(false)) }} > Begin </Button>
      </CustomSider>
    </div>
  );
}

