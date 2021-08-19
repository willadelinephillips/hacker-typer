import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressionBar = () => {

   var now = 0;
  const addNow = () => {
    now = now + 1;
  };
   

  const progressInstance = <ProgressBar now={now} label={`${now}%`} onKeyDown="addNow()" tabIndex="0"></ProgressBar>

  return (
    <p>
    {progressInstance}
    </p>
  );
};

export {ProgressionBar};