import React from 'react';

import LineChart from './Charts/LineChart';
import DoughnutChart from './Charts/DoughnutChart';
import BarChart from './Charts/BarChart';

type StatusProps = {
  value: number,
  displayText: string,
  currency: string,
  color: string
}

const Dashboard = () => {
  return (
    <div className='flex-1 bg-white drop-shadow-custom p-6 pt-3 ml-6'>
      <div className='text-xl font-bold text-gray-800 mb-5'>Dashboard</div>

      <div className='flex justify-center mb-8 mx-4'>
        <StatusBar value={32000} displayText='Income' currency='$' color='green' />
        <StatusBar value={17520} displayText='Expenses' currency='$' color='red' />
        <StatusBar value={14480} displayText='Income' currency='$' color='blue' />
      </div>

      <div>
        <div className='text-center text-sm font-semibold'>Income and Expense Line Chart</div>
        <LineChart />

        <div className='flex m-5 text-center text-sm font-semibold'>
          <div className='w-1/3 flex-1 mr-4'>
            <div>Income and Expense Doughnut Chart</div>
            <DoughnutChart />
          </div>

          <div className='w-2/3 flex-2'>
            <div>Income and Expense Bar Chart</div>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  )
}

const StatusBar = ({value, displayText, currency, color} : StatusProps) => {
  return (
    <div className='bg-white w-1/5 flex items-center p-3 mx-2 border-1 rounded-md drop-shadow-custom'>
      <div className='text-center'>
        <div className='flex items-center text-gray-600'>
          <div id='circle-status' className={`rounded-full w-2 h-2 bg-${color}-500 ml-1 mr-2`}></div>{displayText}
        </div>
        <div className='font-semibold text-2xl'>{currency}{value.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default Dashboard;