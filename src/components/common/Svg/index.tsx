import React from "react";

interface Props {
  icon: "US" | "BR";
}

export default function Svg({ icon }: Props) {
  const icons = {
    US: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="30" height="30" rx="10" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0"
            width="512"
            height="512"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),

    BR: (
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="31" height="31" rx="10" fill="url(#pattern1)" />
        <defs>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image1"
            width="512"
            height="512"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  };

  return icons[icon];
}