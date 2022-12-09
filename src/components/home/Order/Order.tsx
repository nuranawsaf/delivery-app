import React from 'react';

import OrderCode from './OrderCode/OrderCode';
import OrderList from './OrderList/OrderList';

const Order = () => {
  return (
    <div className="mt-8">
      <OrderCode />
      <OrderList />
    </div>
  );
};

export default Order;
