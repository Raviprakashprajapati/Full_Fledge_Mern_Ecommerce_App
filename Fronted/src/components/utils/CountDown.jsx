import React, { useEffect, useState } from 'react';

function CountDown({onClose,timer=10}) {

    const [countdown, setCountdown] = useState(timer);

    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      if (countdown === 0) {
        onClose();
      }
    }, [countdown, onClose]);
  
  return (
    <div>

    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-2xl font-bold mb-4">Countdown: {countdown}</p>
        {/* <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Close
        </button> */}
      </div>
    </div>
      

    </div>
  )
}

export default CountDown




// const [modelOpen,setModelOpen] = useState(false)

// const closeModal=()=>{
//   setModelOpen(false)
// }

// setModelOpen(true) after api IF

 {/* COUNTDOWN */}
//  {modelOpen && <CountDown onClose={closeModal} />}
       





// const [CountTimer,setCountTimer] = useState(false)


// const closeCountTimer=()=>{
//   setCountTimer(false)
// }

// setCountTimer(true)

  {/* COUNTDOWN */}
  // {CountTimer && <CountDown onClose={closeCountTimer}  />}
        
