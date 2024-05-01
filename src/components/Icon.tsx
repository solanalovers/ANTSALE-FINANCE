const CheckIcon = ({ size = "20", fill = "#F5A524" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.6001 2C5.1921 2 1.6001 5.592 1.6001 10C1.6001 14.408 5.1921 18 9.6001 18C14.0081 18 17.6001 14.408 17.6001 10C17.6001 5.592 14.0081 2 9.6001 2ZM13.4241 8.16L8.8881 12.696C8.7761 12.808 8.6241 12.872 8.4641 12.872C8.3041 12.872 8.1521 12.808 8.0401 12.696L5.7761 10.432C5.5441 10.2 5.5441 9.816 5.7761 9.584C6.0081 9.352 6.3921 9.352 6.6241 9.584L8.4641 11.424L12.5761 7.312C12.8081 7.08 13.1921 7.08 13.4241 7.312C13.6561 7.544 13.6561 7.92 13.4241 8.16Z"
      fill={fill}
    />
  </svg>
);

const FireIcon = ({ size = "18" }: { size?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width={size}
      height={size}
      fill="url(#pattern0_4455_6078)"
    />
    <defs>
      <pattern
        id="pattern0_4455_6078"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use transform="scale(0.0138889)" />
      </pattern>
      <image
        id="image0_4455_6078"
        width="72"
        height="72"
      />
    </defs>
  </svg>
);

const ArrowDownIcon = ({ size = "20", color = "#006FEE" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5999 7.45898L11.1666 12.8923C10.5249 13.534 9.4749 13.534 8.83324 12.8923L3.3999 7.45898"
      stroke={color}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ArrowRightIcon = ({ size = "16", color = "#8E8E93" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.94043 13.2807L10.2871 8.93404C10.8004 8.4207 10.8004 7.5807 10.2871 7.06737L5.94043 2.7207"
      stroke={color}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = ({ size = "24", color = "#8E8E93" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
      stroke={color}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export { CheckIcon, FireIcon, ArrowDownIcon, ArrowRightIcon, ArrowLeftIcon };
