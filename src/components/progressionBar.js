import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressionBar = () => {

   const now = 60;

  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

  return (
    <p>
    {progressInstance}
    </p>
  );
};

export {ProgressionBar};