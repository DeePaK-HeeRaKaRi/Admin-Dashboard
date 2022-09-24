import React from 'react';
import './Widgets.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
function Widgets({ type }) {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;
  switch(type) {
  case 'user':
    data = {
      title : 'USERS',
      isMoney : false,
      link : 'See all users',
      icon : <PersonOutlineIcon className='icon' 
      />
    };
    break;
  case 'order':
    data = {
      title : 'ORDERS',
      isMoney : false,
      link : 'View all orders',
      icon : <ShoppingCartCheckoutOutlinedIcon className='icon'
            
      />
    };
    break;
  case 'earning':
    data = {
      title : 'EARNING',
      isMoney : true,
      link : 'View net users',
      icon : <CurrencyRupeeOutlinedIcon className='icon'
        // style={{color:'green',backgroundColor:'background-color: rgba(0,128,0,0.2)'}}
      />
    };
    break;
  case 'balance':
    data = {
      title : 'BALANCE',
      isMoney : true,
      link : 'See details',
      icon : <AccountBalanceWalletIcon className='icon'/>
    };
    break;
  default:
    break;

  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && '₹'} {amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <ArrowUpwardIcon/>
          {diff}%</div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;
