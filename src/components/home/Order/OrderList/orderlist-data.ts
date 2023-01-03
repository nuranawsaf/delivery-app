import { IconType } from 'react-icons';
import { CgTimelapse } from 'react-icons/cg';
import { IoMdBicycle } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';

export interface OrderListData {
  title: string;
  date: string;
  loadTime: string;
  loadTime2: string;
  loadIcon: IconType;
  btnIcon: IconType;
  btn: string;
}

export const orderlistdata: Array<OrderListData> = [
  {
    title: 'Order #316',
    date: '5 Dec 2022,13:29',
    loadIcon: CgTimelapse,
    loadTime: '01:30',
    loadTime2: '/02:30',
    btnIcon: CgTimelapse,
    btn: 'Accept',
  },
  {
    title: 'Order #315',
    date: '5 Dec 2022,13:27',
    loadIcon: CgTimelapse,
    loadTime: '18:30',
    loadTime2: '/30:00',
    btnIcon: IoMdBicycle,
    btn: 'Ready for collection',
  },
  {
    title: 'Order #314',
    date: '5 Dec 2022,13:27',
    loadIcon: MdLocationPin,
    loadTime: 'Arrive at 13:55',
    loadTime2: '',
    btnIcon: IoMdBicycle,
    btn: 'Details',
  },
  {
    title: 'Order #316',
    date: '5 Dec 2022,13:29',
    loadIcon: CgTimelapse,
    loadTime: '01:30',
    loadTime2: '/02:30',
    btnIcon: CgTimelapse,
    btn: 'Accept',
  },
  {
    title: 'Order #314',
    date: '5 Dec 2022,13:27',
    loadIcon: MdLocationPin,
    loadTime: 'Arrive at 13:55',
    loadTime2: '',
    btnIcon: IoMdBicycle,
    btn: 'Details',
  },
  {
    title: 'Order #314',
    date: '5 Dec 2022,13:27',
    loadIcon: MdLocationPin,
    loadTime: 'Arrive at 13:55',
    loadTime2: '',
    btnIcon: IoMdBicycle,
    btn: 'Details',
  },
  {
    title: 'Order #315',
    date: '5 Dec 2022,13:27',
    loadIcon: CgTimelapse,
    loadTime: '18:30',
    loadTime2: '/30:00',
    btnIcon: IoMdBicycle,
    btn: 'Ready for collection',
  },
  {
    title: 'Order #316',
    date: '5 Dec 2022,13:29',
    loadIcon: CgTimelapse,
    loadTime: '01:30',
    loadTime2: '/02:30',
    btnIcon: CgTimelapse,
    btn: 'Accept',
  },
];
