import React from "react";

export default function Toast() {
  return (
    <div className="absolute mx-auto top-10 right-10">
      <div
        id="toast-simple"
        className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-black bg-green-400 divide-x rtl:divide-x-reverse divide-black rounded-lg shadow-xl"
        role="alert"
      >
        <svg
          className="w-5 h-5 text-black rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
          />
        </svg>
        <div className="ps-4 text-sm font-normal">Data sent successfully.</div>
      </div>
    </div>
  );
}
