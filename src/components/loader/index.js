import * as React from "react";
import './style.scss'

const Loader = (props) => (
  <div className="loader-wr">
    <svg
      style={{
        display: "block",
      }}
      width={149.358}
      height={176.2}
      viewBox="0 0 74.679 88.1"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 1.5h8.1v14.7c0 .6 0 1.2.1 1.7-.1-.6-.1-1.2-.1-1.7V1.5h63.6-8.1v14.7c0 7-4.6 13.3-11.7 17.1-4.2 2.3-6.8 5.9-6.8 9.8V45c0 3.9 2.5 7.6 6.8 9.8 7.1 3.8 11.7 10 11.7 17.1v14.7h8.1-35.8 18V76.3c0-3.8-2.6-7.4-7-9.8-.1 0-.1-.1-.2-.1-6.6-3.6-14.9-3.6-21.5 0-.1 0-.1.1-.2.1-4.5 2.4-7 6-7 9.8v10.2h18-36 8.1V71.8c0-7 4.6-13.3 11.7-17.1 4.2-2.3 6.8-5.9 6.8-9.8V43c0-3.9-2.5-7.6-6.8-9.8-6.5-3.5-10.9-9-11.6-15.3h9.9c.7 3.1 3 5.9 6.8 8 5.7 3 9.5 7.7 10.9 12.9 1.4-5.2 5.3-9.9 10.9-12.9 3.8-2 6.2-4.8 6.8-8H19.6"
        fill="none"
        stroke="#ccc"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          keyTimes="0;1"
          values="480 100;480 110"
          dur="6.2258064516129035s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          keyTimes="0;1"
          values="0;-1180"
          dur="6.2258064516129035s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
)

export default Loader;