import React from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
function Sidebar() {
 
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration : 'none' }}>
          <span className='logo'>Admin</span>
        </Link>
      </div>
      <hr></hr>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration : 'none' }}>
            <li>
              <Person2OutlinedIcon className='icon'/>
              <span>Users</span> 
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration : 'none' }}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className='icon'/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <PaymentIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <InsertChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <HubOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>PROFILE</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className='bottom'>
        <div className='colorOption'  ></div>
        <div className='colorOption'  ></div>
      </div> */}
    </div>
  );
}

export default Sidebar;
