import * as React from "react";
const CssSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 183">
    <g filter="url(#a)">
      <path
        fill="#1172B8"
        d="M33.75 157.5 22.5 16.875h135L146.25 157.5 90 174.375 33.75 157.5Z"
      />
      <path fill="#3AD" d="M146.25 28.125H90v137.813l45-14.063 11.25-123.75Z" />
      <path
        fill="#fff"
        d="M109.688 98.438h-56.25L50.624 78.75l45-14.063h-45l-2.813-16.874H135L132.188 67.5 95.625 81.563h33.75L123.75 135 90 146.25 56.25 135l-2.813-28.125h16.876l2.812 14.063L90 126.562l16.875-5.624 2.813-22.5Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={188}
        height={188}
        x={-4}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_252_38" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_252_38"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default CssSVG;
