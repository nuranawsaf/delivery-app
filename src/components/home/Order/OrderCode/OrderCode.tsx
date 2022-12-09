import React from 'react';

import clsx from 'clsx';

import { orderData } from './ordercode-data';

const OrderCode = () => {
  return (
    <div className="bg-white dark:bg-black rounded-lg px-3 py-4 mb-6 w-full">
      <h4 className="font-bold text-xl">Order list</h4>
      <div className="flex">
        {orderData.map((item) => {
          return (
            <div
              className={clsx(
                'border px-[9px] 2xl:px-5 py-1 mt-2 dark:bg-gray-900 text-primary flex items-center text-[13px]',
                item.code == '#306' && 'text-maroon',
                item.code == '#310' && 'text-maroon',
                item.code == '#311' && 'text-yellow',
                item.code == '#315' && 'text-yellow'
              )}
            >
              <item.icon />
              <h6>{item.code}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCode;
