import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import { motion } from 'framer-motion';

import Order from '@components/home/Order/Order';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50 px-8  transition-all duration-300 dark:bg-gray-900">
      <Order />
    </div>
  );
};

export default Home;
