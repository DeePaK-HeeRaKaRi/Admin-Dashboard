import React from 'react';
import './Single.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Chart from '../../Components/Chart/Chart';
import List from '../../Components/Table/Table';
function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h2 className='title'>Information</h2>
            <div className='item'>
              <img 
                src='https://lh3.googleusercontent.com/jx_mj7c07MLhllrQPH2GElebbuYSJYcS8gRzLHWGadpAewBJnkDtXFvjlmEU72snTfdEwMymVssTWy9hlKaEWNS-gV7knmQVrcjorP9O05LpTQlKV4wyENBtTmz-S_d3o-TOcRCsXDa2KcqumjGt_letckoZgHtnSE6CEGnKzOOHumyCnxXs6ytDWhJ4eX4ZCYk3TLp1YlgvzRCtmVk7yfr3FZgNPx1-Trq9A3WMap2mVmyxNKDk613p__kejKWZ5fYJ_bIbgK-KSMcpj7qsU_pSqTcFb7P9CEIQU4wxu_SvTX2dxdpbBaeEOImRo0rpqLhraZrYFi-FrB7EVToPW7Mb_SYLxMWoJlZ-kIUjPFaM3_7BI05vH31cwIvpw0tpY9lzB9GVZ-omWRUJsdL7LgPcvqZiiJTKPsdK655iqBc9h6jXHSt7MGDKWd6bDK2vRmVJN6613oHojoigowiedebV7Gjx350UNsFuA5M6QUjdV7Xut89gCrZmtq8YFxhADs5Tueurv1rvpIQxNNyDa55cL7ZADEJgCQI-UkVjhhfzhDL4ll-PwCtARhDqdmWrmd4QbnK5__Pb8ZNVMV5Lrekg-nvpHmMvD5pWwB23niGgMO9qrHF1GxFyiiA-eZZVMUgCU8syc70Dz0MT2IeNT2buyFMGrGx5OX1Bc1Z-tViN7VBHYn00Pprj2wg_APBQvJyjiH693Uh-F3UAHIclYEitjxMOhsquVh5-7T-sdnafqYlFF7_cerGXPfC31puZC7wwvt8cRrZN9k_N00XHRJe2f3p8Hfuk7sNX127aVTiOkeuLZZucLTzeMBNm9Hu1b3CNvSxUSh0Q7lrgRwPdMNBUIBXvYWOYuIIQqazdB2lzy82nUDBkh-EPy2fgCH9M-cwqh-KCjImNZZd734jglDX8lVP0JKVIKNFWXxYPQxqpJiwLAaji6XI1dEWQWvMNYRRAYIz1qT7PWgUvlUj5ltlzs5ZFtGAWo3pIridOZWmr-96z=w258-h244-no?authuser=0'
                alt='not found'
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Deepak</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>deepak@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+91-9874563210</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Edyen Gardens, White fields, Bangalore</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User transactions from last 6 months'/>
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
