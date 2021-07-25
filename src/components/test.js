import React, { useState, useEffect } from 'react';

let hackerphrases = [

  "cmd admin launch edit",
  "scan internal drive bypass",
  "password override brute force",
  "keygen access !ignore permissions",
  "file upload !bypass admin",
  "channel dox file reload !important",
  "object override !admin",
  "export int let filesize = max"

]

const IntervalExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="test">
        {seconds} seconds have elapsed since mounting.
    </p>
  );
};

export {IntervalExample};