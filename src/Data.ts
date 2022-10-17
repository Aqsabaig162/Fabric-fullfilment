export interface DataType {
    key: string;
    order: string;
    ordersize: string[];
    tags: string[];
    shippingtype : string;
    shipby: string;
    status: string;
    
  }

 export const Tabledata: DataType[] = [
    {
      key: '1',
      order: 'Order012414',
      ordersize: ['3'] ,
      tags: ['VAS'],
      shippingtype : "Overnight",
      shipby: "Yesterday",
      status: 'completed',
      
    },
    {
        key: '2',
      order: 'Order012414',
      ordersize: ['3/5'] ,
      tags: ['VAS'],
      shippingtype : "Standard",
      shipby: "Yesterday",
      status: 'Inprogress',
    },
    {
        key: '3',
        order: 'Order012414',
        ordersize: ['3'] ,
        tags: ['VAS'],
        shippingtype : "Overnight",
        shipby: "Today",
        status: 'completed',
    },
    {
        key: '4',
        order: 'Order012414',
        ordersize: ['3/5'] ,
        tags: ['VAS'],
        shippingtype : "Overnight",
        shipby: "Today",
        status: 'Inprogress',
      },
      {
          key: '5',
        order: 'Order012414',
        ordersize: ['3'] ,
        tags: ['VAS'],
        shippingtype : "Overnight",
        shipby: "Today",
        status: 'completed',
      },
      {
          key: '6',
          order: 'Order012414',
          ordersize: ['3/5'] ,
          tags: ['VAS'],
          shippingtype : "Standard",
          shipby: "Dec 22, 2022",
          status: 'Inprogress',
      },{
        key: '7',
        order: 'Order012414',
        ordersize: ['3'] ,
        tags: ['VAS'],
        shippingtype : "Overnight",
        shipby: "Dec 22, 2022",
        status: 'completed',
      },
      {
          key: '8',
        order: 'Order012414',
        ordersize: ['3/5'] ,
        tags: ['VAS'],
        shippingtype : "Overnight",
        shipby: "Dec 22, 2022",
        status: 'Inprogress',
      },
      {
          key: '9',
          order: 'Order012414',
          ordersize: ['3/5'] ,
          tags: ['VAS'],
          shippingtype : "Overnight",
          shipby: "Dec 22, 2022",
          status: 'Inprogress',
      },
      {
        key: '10',
        order: 'Order012414',
        ordersize: ['3/5'] ,
        tags: ['VAS'],
        shippingtype : "Overnight",
        shipby: "Dec 22, 2022",
        status: 'Inprogress',
    },
  ];

