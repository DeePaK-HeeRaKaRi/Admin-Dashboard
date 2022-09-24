import React from 'react';
import './Featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import 'react-circular-progressbar/dist/styles.css';
function Featured() {
  const totalValue = 70;
  const amount = 420;
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={totalValue} text={`${totalValue}%`} strokeWidth={5}/>
        </div>
        <p className='title'>Total Sales made today</p>
        <p className='amount'>₹ {amount}</p>
        <p className='desc'>
          Previous transactions processing.Last payments may not be included
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>₹400k</div>
            </div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Last week</div>
            <div className='itemResult positive'>
              <ExpandLessOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>₹400k</div>
            </div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Last month</div>
            <div className='itemResult positive'>
              <ExpandLessOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>₹400k</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
