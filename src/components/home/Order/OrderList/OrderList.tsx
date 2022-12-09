import React from 'react';

import clsx from 'clsx';
import { BiChevronDown } from 'react-icons/bi';
import { MdPerson } from 'react-icons/md';

import { orderlistdata } from './orderlist-data';

const OrderList = () => {
  return (
    <div className=" grid gap-4 2xl:gap-10  xl:grid-cols-3 2xl:grid-cols-4">
      {orderlistdata.map((item) => {
        return (
          <div className="bg-white dark:bg-black rounded-lg w-[20.5rem] mb-4 ">
            <div className="flex items-center justify-between border-b pb-4 pt-4">
              <div className="pl-3 ">
                <h4 className="font-bold text-xl">{item.title}</h4>
                <h6 className="text-secondary">{item.date}</h6>
              </div>

              <div
                className={clsx(
                  'flex items-center gap-2 text-primary bg-lightGreen px-3 py-1 font-medium mr-3 rounded-md',
                  item.loadTime == '18:30' && 'text-yellow bg-lightYellow'
                )}
              >
                <item.loadIcon />
                <h6>
                  {item.loadTime}
                  <span className="text-secondary">{item.loadTime2}</span>
                </h6>
              </div>
              {/* className=' flex items-center gap-2 text-primary bg-lightGreen px-3 py-1 font-medium mr-3 rounded-md' */}
            </div>
            <div className="flex items-center justify-between border-b py-4">
              <div className="flex items-center pl-3">
                <MdPerson className="text-secondary" />
                <h6 className="font-medium ml-2">Client Details</h6>
              </div>
              <div className="mr-3">
                <BiChevronDown className="text-secondary ml-2" />
              </div>
            </div>

            {[1, 2].map((index) => (
              <div className="px-3 py-4 border-b flex justify-between items-center gap-2">
                <div>
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
                    alt=""
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <h4 className="font-bold text-xl">Vegetable Fritters</h4>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <h6 className="text-secondary text-base w-52">
                    Vegetable Fritters with Poached Egg
                  </h6>

                  <div className="flex items-center justify-between">
                    <h6 className="text-base font-medium">$14.50</h6>
                    <h6 className="text-base text-right">Qty: xl</h6>
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t mt-20"></div>

            <div className="flex items-center justify-between py-3 px-3">
              <div>
                <h6>X2 Items</h6>
                <h4 className="font-bold ">$45.50</h4>
              </div>
              <div>
                <button
                  className={clsx(
                    item.btn == 'Accept' &&
                      'text-white font-semibold px-5 py-2 rounded-lg bg-primary flex items-center',
                    item.btn == 'Ready for collection' &&
                      'text-white font-semibold px-5 py-2 rounded-lg bg-yellow flex items-center',
                    item.btn == 'Details' &&
                      'text-primary font-semibold px-5 py-2 rounded-lg border border-primary flex items-center'
                  )}
                >
                  <item.btnIcon className="mr-3" />
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
