import React from 'react';
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon'/> English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className='counter'>5</div>
          </div>
          <div className='item'>
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <img 
              src='https://lh3.googleusercontent.com/jx_mj7c07MLhllrQPH2GElebbuYSJYcS8gRzLHWGadpAewBJnkDtXFvjlmEU72snTfdEwMymVssTWy9hlKaEWNS-gV7knmQVrcjorP9O05LpTQlKV4wyENBtTmz-S_d3o-TOcRCsXDa2KcqumjGt_letckoZgHtnSE6CEGnKzOOHumyCnxXs6ytDWhJ4eX4ZCYk3TLp1YlgvzRCtmVk7yfr3FZgNPx1-Trq9A3WMap2mVmyxNKDk613p__kejKWZ5fYJ_bIbgK-KSMcpj7qsU_pSqTcFb7P9CEIQU4wxu_SvTX2dxdpbBaeEOImRo0rpqLhraZrYFi-FrB7EVToPW7Mb_SYLxMWoJlZ-kIUjPFaM3_7BI05vH31cwIvpw0tpY9lzB9GVZ-omWRUJsdL7LgPcvqZiiJTKPsdK655iqBc9h6jXHSt7MGDKWd6bDK2vRmVJN6613oHojoigowiedebV7Gjx350UNsFuA5M6QUjdV7Xut89gCrZmtq8YFxhADs5Tueurv1rvpIQxNNyDa55cL7ZADEJgCQI-UkVjhhfzhDL4ll-PwCtARhDqdmWrmd4QbnK5__Pb8ZNVMV5Lrekg-nvpHmMvD5pWwB23niGgMO9qrHF1GxFyiiA-eZZVMUgCU8syc70Dz0MT2IeNT2buyFMGrGx5OX1Bc1Z-tViN7VBHYn00Pprj2wg_APBQvJyjiH693Uh-F3UAHIclYEitjxMOhsquVh5-7T-sdnafqYlFF7_cerGXPfC31puZC7wwvt8cRrZN9k_N00XHRJe2f3p8Hfuk7sNX127aVTiOkeuLZZucLTzeMBNm9Hu1b3CNvSxUSh0Q7lrgRwPdMNBUIBXvYWOYuIIQqazdB2lzy82nUDBkh-EPy2fgCH9M-cwqh-KCjImNZZd734jglDX8lVP0JKVIKNFWXxYPQxqpJiwLAaji6XI1dEWQWvMNYRRAYIz1qT7PWgUvlUj5ltlzs5ZFtGAWo3pIridOZWmr-96z=w258-h244-no?authuser=0'
              alt='Not found'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
