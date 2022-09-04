import React, { useEffect, useState } from 'react';

import {SuccessIcon, WarningIcon, ErrorIcon} from './AlertIcons';

type AlertProps = {
  type?: string,
  msg: string,
  show: boolean
}

const Alert = ({type, msg, show} : AlertProps) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(type === 'success' ? 'green' : type === 'warning' ? 'yellow' : 'red');

    console.log(show);
  }, [])

  return (
    <div id='alert' data-type={type}
      className={`opacity-${show ? '100' : '0'} top-5 transition-all bg-${color}-100 py-4 px-10 rounded-md drop-shadow-custom border border-${color}-400 absolute`}>
      <div className='flex gap-2'>
        <div id='icon' className={`text-${color}-400`}>
          {type === 'success' ? ( <SuccessIcon /> ) : type === 'warning' ? ( <WarningIcon /> ) : ( <ErrorIcon /> ) }
        </div>
        <div id='message'>
          {msg}
        </div>
      </div> 
    </div>
  )
}

export default Alert;

