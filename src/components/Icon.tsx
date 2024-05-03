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

const UploadIcon = ({ size = "48", color = "#8E8E93" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.7417 30C23.9133 30 23.2417 29.3284 23.2417 28.5V4.418C23.2417 3.58957 23.9133 2.918 24.7417 2.918C25.5701 2.918 26.2417 3.58957 26.2417 4.418V28.5C26.2417 29.3284 25.5701 30 24.7417 30Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.8512 11.3343C17.2642 10.7497 17.2622 9.79999 17.8468 9.213L23.6788 3.357C23.9603 3.07437 24.3428 2.91548 24.7417 2.91548C25.1406 2.91548 25.523 3.07437 25.8045 3.357L31.6365 9.213C32.2211 9.79999 32.2191 10.7497 31.6321 11.3343C31.0452 11.9189 30.0954 11.917 29.5108 11.33L24.7417 6.54117L19.9725 11.33C19.3879 11.917 18.4382 11.9189 17.8512 11.3343Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.40018 19.4244C10.5513 17.871 12.4331 17.0944 15.8977 16.775C16.7226 16.699 17.3297 15.9686 17.2537 15.1437C17.1776 14.3187 16.4472 13.7116 15.6223 13.7877C11.9269 14.1283 8.92871 15.0217 6.98982 17.6383C5.13091 20.1469 4.5 23.9265 4.5 29.2813C4.5 36.381 5.61309 40.7461 9.25988 42.9862C10.998 44.0539 13.1506 44.5257 15.6148 44.755C18.0693 44.9834 21.0181 44.9834 24.4368 44.9833H24.5632C27.9819 44.9834 30.9307 44.9834 33.3852 44.755C35.8494 44.5257 38.002 44.0539 39.7401 42.9862C43.3869 40.7461 44.5 36.381 44.5 29.2813C44.5 23.9265 43.8691 20.1469 42.0102 17.6383C40.0713 15.0217 37.0731 14.1283 33.3777 13.7877C32.5528 13.7116 31.8224 14.3187 31.7463 15.1437C31.6703 15.9686 32.2774 16.699 33.1023 16.775C36.5669 17.0944 38.4487 17.871 39.5998 19.4244C40.8309 21.0858 41.5 23.9762 41.5 29.2813C41.5 36.3837 40.3031 39.1196 38.1699 40.43C37.018 41.1376 35.4131 41.5534 33.1073 41.7679C30.8069 41.9819 27.9944 41.9833 24.5 41.9833C21.0056 41.9833 18.1931 41.9819 15.8927 41.7679C13.5869 41.5534 11.982 41.1376 10.8301 40.43C8.69691 39.1196 7.5 36.3837 7.5 29.2813C7.5 23.9762 8.16909 21.0858 9.40018 19.4244Z"
      fill={color}
    />
  </svg>
);

export {
  CheckIcon,
  FireIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  UploadIcon,
};
