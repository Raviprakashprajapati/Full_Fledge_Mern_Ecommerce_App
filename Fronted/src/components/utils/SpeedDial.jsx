import React, { useState } from 'react';

function SpeedDial() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSpeedDial = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed end-6 bottom-6 group">
    <div
      id="speed-dial-menu-text-outside-button"
      className={`flex flex-col items-center ${
        isOpen ? 'mb-4' : 'hidden'
      } space-y-2`}
    >
      {/* Example Speed Dial options */}
      <button
        type="button"
        className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-lg border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
      >
        <svg
          className="w-5 h-5 mx-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          {/* Share icon path */}
          <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
        </svg>
        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -start-14 top-1/2">Share</span>
      </button>
      {/* Add more buttons as needed */}

      {/* Close button */}
      <button
        onClick={toggleSpeedDial}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          {/* Close icon path */}
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
    </div>

    {/* Speed Dial toggle button */}
    <button
      type="button"
      onClick={toggleSpeedDial}
      className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    >
      <svg
        className="w-5 h-5 transition-transform group-hover:rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        {/* Toggle icon path */}
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
      <span className="sr-only">Open actions menu</span>
    </button>
  </div>
  );
}

export default SpeedDial;
