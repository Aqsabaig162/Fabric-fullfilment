
import { tab } from '@testing-library/user-event/dist/tab';
import { Space, Table, Tag , Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { CustomTable , CustomModal , CustomModal2} from './tablestyle';
import { DataType, Tabledata } from '../Data';
import { useState , useEffect, useCallback , useContext}  from 'react';



const Usertable:React.FC = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [issubModalOpen, setIssubModalOpen] = useState(false);
const [dataa, setdataa] = useState<any>(Tabledata)

const showModal = () => {
  setIsModalOpen(true);
};
const showsubModal = () => {
  setIssubModalOpen(true);
};



const handleOk = () => {
  setIsModalOpen(false);
};
const handlesubOk = () => {
  setIssubModalOpen(false);
};


const handleCancel = () => {
  setIsModalOpen(false);
};
const handlesubCancel = () => {
  setIssubModalOpen(false);
};


console.log(dataa);

      const columns: ColumnsType <DataType> = [
        {
          title: 'Order#',
          dataIndex: 'order',
          key: 'order',
          render: text => <a className='ordernum' >{text}</a>,
        },
        {
          title: 'Order size',
          dataIndex: 'ordersize',
          key: 'ordersize',
        render: (ordersize,  record) => 
        (
          <>  
          {  
          record.status == "completed" ? 
          (<Tag className='ordersize'>
            {ordersize}
          </Tag> ) : 
          (
          <Tag className='orderpending'  >
           <span  onClick={() => {  showModal() ; } } > {ordersize} </span> 
          </Tag>)  
          }
                        
          </>
        ),
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
               <Tag>
                    {tags}
                </Tag>
              
            </>
          ),
        },
        {
            title: 'Shipping type',
            dataIndex: 'shippingtype',
            key: 'shippingtype',
          },
          {
            title: 'Ship by',
            dataIndex: 'shipby',
            key: 'shipby',

            render: (shipby , record) => (
              <>
              {
                record.shipby == 'Today' ?  (
                  <div className='today'>
                    {shipby}
                  </div>
                ) :  record.shipby == 'Yesterday' ?
                (
                  <div className='yesterday'>
                    {shipby}
                  </div>
                )
                :
                (
                  <div className='date'>
                    {shipby}
                  </div>
                )
              }
              </>
            )
          },
      ];
      
    
      return(

       


        <CustomTable>
        <CustomModal2  open={issubModalOpen} onOk={handlesubOk} onCancel={handlesubCancel} footer={null}  >
        <div className='contentt'>
        <h2>Return to main screen</h2>
        <p>This order is in progress by another associate.</p>
        <div className='btn'>
        <Button type='primary' className='btn2'  onClick ={ () => handlesubCancel()}> Return </Button>
        </div>
        </div>
        </CustomModal2>
       
      <CustomModal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}  > 
        <div className='contentt'>
        <h2>Do you want to resume?</h2>
        <p>This order was initiated by another associate.</p>
        <div className='btn'>
        <Button type='default' onClick={() => {  handleCancel(); showsubModal();  } } className='btn1'> Resume this order </Button>
        <Button type='primary' className='btn2'  onClick ={handleCancel}> Close </Button>
        </div>
        </div>
      </CustomModal>
          <Table columns={columns} dataSource={dataa} />
        
        </CustomTable>
        
      )
}


export default Usertable;