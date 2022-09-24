import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,AreaChart,Area } from 'recharts';
import './Chart.scss';
const data = [
  { month : 'January',total : 12000 },
  { month : 'February',total : 21000 },
  { month : 'March',total : 8000 },
  { month : 'April',total : 35000 },
  { month : 'May',total : 28000 },
  { month : 'June',total : 10000 },
];


function Chart({ aspect,title }) {
  return (
    <div className='chart'>
      <div className='title'>
        {title}
      </div>
      {/* aspect={2/1} if width is 100px than height will be half of the width which is 50px */}
      {/* <ResponsiveContainer width="100%" aspect={2/1}> */}
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top : 10, right : 30, left : 0, bottom : 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient> */}
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
          {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
