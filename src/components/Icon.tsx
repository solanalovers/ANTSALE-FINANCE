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
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.7417 30C23.9133 30 23.2417 29.3284 23.2417 28.5V4.418C23.2417 3.58957 23.9133 2.918 24.7417 2.918C25.5701 2.918 26.2417 3.58957 26.2417 4.418V28.5C26.2417 29.3284 25.5701 30 24.7417 30Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8512 11.3343C17.2642 10.7497 17.2622 9.79999 17.8468 9.213L23.6788 3.357C23.9603 3.07437 24.3428 2.91548 24.7417 2.91548C25.1406 2.91548 25.523 3.07437 25.8045 3.357L31.6365 9.213C32.2211 9.79999 32.2191 10.7497 31.6321 11.3343C31.0452 11.9189 30.0954 11.917 29.5108 11.33L24.7417 6.54117L19.9725 11.33C19.3879 11.917 18.4382 11.9189 17.8512 11.3343Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.40018 19.4244C10.5513 17.871 12.4331 17.0944 15.8977 16.775C16.7226 16.699 17.3297 15.9686 17.2537 15.1437C17.1776 14.3187 16.4472 13.7116 15.6223 13.7877C11.9269 14.1283 8.92871 15.0217 6.98982 17.6383C5.13091 20.1469 4.5 23.9265 4.5 29.2813C4.5 36.381 5.61309 40.7461 9.25988 42.9862C10.998 44.0539 13.1506 44.5257 15.6148 44.755C18.0693 44.9834 21.0181 44.9834 24.4368 44.9833H24.5632C27.9819 44.9834 30.9307 44.9834 33.3852 44.755C35.8494 44.5257 38.002 44.0539 39.7401 42.9862C43.3869 40.7461 44.5 36.381 44.5 29.2813C44.5 23.9265 43.8691 20.1469 42.0102 17.6383C40.0713 15.0217 37.0731 14.1283 33.3777 13.7877C32.5528 13.7116 31.8224 14.3187 31.7463 15.1437C31.6703 15.9686 32.2774 16.699 33.1023 16.775C36.5669 17.0944 38.4487 17.871 39.5998 19.4244C40.8309 21.0858 41.5 23.9762 41.5 29.2813C41.5 36.3837 40.3031 39.1196 38.1699 40.43C37.018 41.1376 35.4131 41.5534 33.1073 41.7679C30.8069 41.9819 27.9944 41.9833 24.5 41.9833C21.0056 41.9833 18.1931 41.9819 15.8927 41.7679C13.5869 41.5534 11.982 41.1376 10.8301 40.43C8.69691 39.1196 7.5 36.3837 7.5 29.2813C7.5 23.9762 8.16909 21.0858 9.40018 19.4244Z"
      fill={color}
    />
  </svg>
);

const PlusIcon = ({ size = "24", color = "#006FEE" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0371 7.71484C12.4513 7.71484 12.7871 8.05063 12.7871 8.46484V15.6133C12.7871 16.0275 12.4513 16.3633 12.0371 16.3633C11.6229 16.3633 11.2871 16.0275 11.2871 15.6133V8.46484C11.2871 8.05063 11.6229 7.71484 12.0371 7.71484Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.70898 12.0391C7.70898 11.6248 8.04477 11.2891 8.45898 11.2891H15.6148C16.029 11.2891 16.3648 11.6248 16.3648 12.0391C16.3648 12.4533 16.029 12.7891 15.6148 12.7891H8.45898C8.04477 12.7891 7.70898 12.4533 7.70898 12.0391Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.96027 4.96124C3.66122 6.26029 3.0498 8.42817 3.0498 12.0376C3.0498 15.6471 3.66122 17.815 4.96027 19.114C6.25931 20.413 8.42719 21.0245 12.0366 21.0245C15.6461 21.0245 17.814 20.413 19.113 19.114C20.4121 17.815 21.0235 15.6471 21.0235 12.0376C21.0235 8.42817 20.4121 6.26029 19.113 4.96124C17.814 3.6622 15.6461 3.05078 12.0366 3.05078C8.42719 3.05078 6.25931 3.6622 4.96027 4.96124ZM3.89961 3.90058C5.64346 2.15673 8.344 1.55078 12.0366 1.55078C15.7293 1.55078 18.4298 2.15673 20.1737 3.90058C21.9175 5.64443 22.5235 8.34497 22.5235 12.0376C22.5235 15.7303 21.9175 18.4308 20.1737 20.1747C18.4298 21.9185 15.7293 22.5245 12.0366 22.5245C8.344 22.5245 5.64346 21.9185 3.89961 20.1747C2.15576 18.4308 1.5498 15.7303 1.5498 12.0376C1.5498 8.34497 2.15576 5.64443 3.89961 3.90058Z"
      fill={color}
    />
  </svg>
);

const MinusIcon = ({ size = "24", color = "#F31260" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.70898 12.0391C7.70898 11.6248 8.04477 11.2891 8.45898 11.2891H15.6148C16.029 11.2891 16.3648 11.6248 16.3648 12.0391C16.3648 12.4533 16.029 12.7891 15.6148 12.7891H8.45898C8.04477 12.7891 7.70898 12.4533 7.70898 12.0391Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.96027 4.96124C3.66122 6.26029 3.0498 8.42817 3.0498 12.0376C3.0498 15.6471 3.66122 17.815 4.96027 19.114C6.25931 20.413 8.42719 21.0245 12.0366 21.0245C15.6461 21.0245 17.814 20.413 19.113 19.114C20.4121 17.815 21.0235 15.6471 21.0235 12.0376C21.0235 8.42817 20.4121 6.26029 19.113 4.96124C17.814 3.6622 15.6461 3.05078 12.0366 3.05078C8.42719 3.05078 6.25931 3.6622 4.96027 4.96124ZM3.89961 3.90058C5.64346 2.15673 8.344 1.55078 12.0366 1.55078C15.7293 1.55078 18.4298 2.15673 20.1737 3.90058C21.9175 5.64443 22.5235 8.34497 22.5235 12.0376C22.5235 15.7303 21.9175 18.4308 20.1737 20.1747C18.4298 21.9185 15.7293 22.5245 12.0366 22.5245C8.344 22.5245 5.64346 21.9185 3.89961 20.1747C2.15576 18.4308 1.5498 15.7303 1.5498 12.0376C1.5498 8.34497 2.15576 5.64443 3.89961 3.90058Z"
      fill={color}
    />
  </svg>
);

const SunIcon = ({ size = "24", color = "#006FEE" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9999 7.02734C9.23994 7.02734 6.99994 9.26734 6.99994 12.0273C6.99994 14.7873 9.23994 17.0273 11.9999 17.0273C14.7599 17.0273 16.9999 14.7873 16.9999 12.0273C16.9999 9.26734 14.7599 7.02734 11.9999 7.02734ZM1.99994 13.0273H3.99994C4.54994 13.0273 4.99994 12.5773 4.99994 12.0273C4.99994 11.4773 4.54994 11.0273 3.99994 11.0273H1.99994C1.44994 11.0273 0.999939 11.4773 0.999939 12.0273C0.999939 12.5773 1.44994 13.0273 1.99994 13.0273ZM19.9999 13.0273H21.9999C22.5499 13.0273 22.9999 12.5773 22.9999 12.0273C22.9999 11.4773 22.5499 11.0273 21.9999 11.0273H19.9999C19.4499 11.0273 18.9999 11.4773 18.9999 12.0273C18.9999 12.5773 19.4499 13.0273 19.9999 13.0273ZM10.9999 2.02734V4.02734C10.9999 4.57734 11.4499 5.02734 11.9999 5.02734C12.5499 5.02734 12.9999 4.57734 12.9999 4.02734V2.02734C12.9999 1.47734 12.5499 1.02734 11.9999 1.02734C11.4499 1.02734 10.9999 1.47734 10.9999 2.02734ZM10.9999 20.0273V22.0273C10.9999 22.5773 11.4499 23.0273 11.9999 23.0273C12.5499 23.0273 12.9999 22.5773 12.9999 22.0273V20.0273C12.9999 19.4773 12.5499 19.0273 11.9999 19.0273C11.4499 19.0273 10.9999 19.4773 10.9999 20.0273ZM5.98994 4.60734C5.89743 4.51464 5.78754 4.44109 5.66656 4.39091C5.54559 4.34073 5.41591 4.3149 5.28494 4.3149C5.15397 4.3149 5.02429 4.34073 4.90331 4.39091C4.78234 4.44109 4.67245 4.51464 4.57994 4.60734C4.48724 4.69986 4.41369 4.80975 4.36351 4.93072C4.31332 5.05169 4.2875 5.18138 4.2875 5.31234C4.2875 5.44331 4.31332 5.573 4.36351 5.69397C4.41369 5.81494 4.48724 5.92483 4.57994 6.01734L5.63994 7.07734C6.02994 7.46734 6.66994 7.46734 7.04994 7.07734C7.42994 6.68734 7.43994 6.04734 7.04994 5.66734L5.98994 4.60734ZM18.3599 16.9773C18.2674 16.8846 18.1575 16.8111 18.0366 16.7609C17.9156 16.7107 17.7859 16.6849 17.6549 16.6849C17.524 16.6849 17.3943 16.7107 17.2733 16.7609C17.1523 16.8111 17.0425 16.8846 16.9499 16.9773C16.8572 17.0699 16.7837 17.1797 16.7335 17.3007C16.6833 17.4217 16.6575 17.5514 16.6575 17.6823C16.6575 17.8133 16.6833 17.943 16.7335 18.064C16.7837 18.1849 16.8572 18.2948 16.9499 18.3873L18.0099 19.4473C18.3999 19.8373 19.0399 19.8373 19.4199 19.4473C19.5126 19.3548 19.5862 19.2449 19.6364 19.124C19.6866 19.003 19.7124 18.8733 19.7124 18.7423C19.7124 18.6114 19.6866 18.4817 19.6364 18.3607C19.5862 18.2397 19.5126 18.1299 19.4199 18.0373L18.3599 16.9773ZM19.4199 6.01734C19.5126 5.92483 19.5862 5.81494 19.6364 5.69397C19.6866 5.573 19.7124 5.44331 19.7124 5.31234C19.7124 5.18138 19.6866 5.05169 19.6364 4.93072C19.5862 4.80975 19.5126 4.69986 19.4199 4.60734C19.3274 4.51464 19.2175 4.44109 19.0966 4.39091C18.9756 4.34073 18.8459 4.3149 18.7149 4.3149C18.584 4.3149 18.4543 4.34073 18.3333 4.39091C18.2123 4.44109 18.1025 4.51464 18.0099 4.60734L16.9499 5.66734C16.5599 6.05734 16.5599 6.69734 16.9499 7.07734C17.3399 7.45734 17.9799 7.46734 18.3599 7.07734L19.4199 6.01734ZM7.04994 18.3873C7.14264 18.2948 7.21619 18.1849 7.26637 18.064C7.31655 17.943 7.34238 17.8133 7.34238 17.6823C7.34238 17.5514 7.31655 17.4217 7.26637 17.3007C7.21619 17.1797 7.14264 17.0699 7.04994 16.9773C6.95743 16.8846 6.84754 16.8111 6.72656 16.7609C6.60559 16.7107 6.47591 16.6849 6.34494 16.6849C6.21397 16.6849 6.08429 16.7107 5.96331 16.7609C5.84234 16.8111 5.73245 16.8846 5.63994 16.9773L4.57994 18.0373C4.18994 18.4273 4.18994 19.0673 4.57994 19.4473C4.96994 19.8273 5.60994 19.8373 5.98994 19.4473L7.04994 18.3873Z"
      fill={color}
    />
  </svg>
);

const MoonIcon = ({ size = "24", color = "#8E8E93" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9999 3.02734C10.2199 3.02734 8.47985 3.55518 6.99981 4.54412C5.51977 5.53305 4.36622 6.93866 3.68503 8.58319C3.00384 10.2277 2.82561 12.0373 3.17288 13.7832C3.52014 15.529 4.37731 17.1326 5.63598 18.3913C6.89465 19.65 8.4983 20.5071 10.2441 20.8544C11.99 21.2017 13.7996 21.0234 15.4441 20.3423C17.0886 19.6611 18.4942 18.5075 19.4832 17.0275C20.4721 15.5474 20.9999 13.8074 20.9999 12.0273C20.9999 11.5673 20.9599 11.1073 20.8999 10.6673C20.4003 11.368 19.7401 11.9388 18.9746 12.332C18.2091 12.7252 17.3605 12.9293 16.4999 12.9273C15.3551 12.9274 14.2399 12.5638 13.3151 11.889C12.3903 11.2142 11.7038 10.2632 11.3545 9.17295C11.0052 8.08275 11.0112 6.90977 11.3716 5.8232C11.732 4.73663 12.4283 3.79262 13.3599 3.12734C12.9199 3.06734 12.4599 3.02734 11.9999 3.02734Z"
      fill={color}
    />
  </svg>
);

const CautionIcon = ({ size = "20", color = "#DD6B20" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9 13V15H11V13H9ZM9 5V11H11V5H9Z"
      fill={color}
    />
  </svg>
);

const InfoIcon = ({ size = "20", color = "#3182CE" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9 9V15H11V9H9ZM9 5V7H11V5H9Z"
      fill={color}
    />
  </svg>
);

const RocketIcon = ({ size = "24" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4699_24481"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={size}
      height={size}
    >
      <rect
        width={size}
        height={size}
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_4699_24481)">
      <path
        d="M5.65005 10.0249L7.60005 10.8499C7.83338 10.3832 8.07505 9.93319 8.32505 9.49986C8.57505 9.06653 8.85005 8.63319 9.15005 8.19986L7.75005 7.92486L5.65005 10.0249ZM9.20005 12.0999L12.05 14.9249C12.75 14.6582 13.5 14.2499 14.3 13.6999C15.1 13.1499 15.85 12.5249 16.55 11.8249C17.7167 10.6582 18.6292 9.36236 19.2875 7.93736C19.9459 6.51236 20.2334 5.19986 20.15 3.99986C18.95 3.91653 17.6334 4.20403 16.2 4.86236C14.7667 5.52069 13.4667 6.4332 12.3 7.59986C11.6 8.29986 10.975 9.04986 10.425 9.84986C9.87505 10.6499 9.46672 11.3999 9.20005 12.0999ZM13.65 10.4749C13.2667 10.0915 13.075 9.62069 13.075 9.06236C13.075 8.50403 13.2667 8.0332 13.65 7.64986C14.0334 7.26653 14.5084 7.07486 15.075 7.07486C15.6417 7.07486 16.1167 7.26653 16.5 7.64986C16.8834 8.0332 17.075 8.50403 17.075 9.06236C17.075 9.62069 16.8834 10.0915 16.5 10.4749C16.1167 10.8582 15.6417 11.0499 15.075 11.0499C14.5084 11.0499 14.0334 10.8582 13.65 10.4749ZM14.125 18.4999L16.225 16.3999L15.95 14.9999C15.5167 15.2999 15.0834 15.5707 14.65 15.8124C14.2167 16.054 13.7667 16.2915 13.3 16.5249L14.125 18.4999ZM21.95 2.17486C22.2667 4.19153 22.0709 6.15403 21.3625 8.06236C20.6542 9.9707 19.4334 11.7915 17.7 13.5249L18.2 15.9999C18.2667 16.3332 18.25 16.6582 18.15 16.9749C18.05 17.2915 17.8834 17.5665 17.65 17.7999L13.45 21.9999L11.35 17.0749L7.07505 12.7999L2.15005 10.6999L6.32505 6.49986C6.55838 6.26653 6.83755 6.09986 7.16255 5.99986C7.48755 5.89986 7.81672 5.88319 8.15005 5.94986L10.625 6.44986C12.3584 4.71653 14.175 3.49153 16.075 2.77486C17.975 2.05819 19.9334 1.85819 21.95 2.17486ZM3.92505 15.9749C4.50838 15.3915 5.22088 15.0957 6.06255 15.0874C6.90422 15.079 7.61672 15.3665 8.20005 15.9499C8.78338 16.5332 9.07088 17.2457 9.06255 18.0874C9.05422 18.929 8.75838 19.6415 8.17505 20.2249C7.75838 20.6415 7.06255 20.9999 6.08755 21.2999C5.11255 21.5999 3.76672 21.8665 2.05005 22.0999C2.28338 20.3832 2.55005 19.0374 2.85005 18.0624C3.15005 17.0874 3.50838 16.3915 3.92505 15.9749ZM5.35005 17.3749C5.18338 17.5415 5.01672 17.8457 4.85005 18.2874C4.68338 18.729 4.56672 19.1749 4.50005 19.6249C4.95005 19.5582 5.39588 19.4457 5.83755 19.2874C6.27922 19.129 6.58338 18.9665 6.75005 18.7999C6.95005 18.5999 7.05838 18.3582 7.07505 18.0749C7.09172 17.7915 7.00005 17.5499 6.80005 17.3499C6.60005 17.1499 6.35838 17.054 6.07505 17.0624C5.79172 17.0707 5.55005 17.1749 5.35005 17.3749Z"
        fill="#F31260"
      />
    </g>
  </svg>
);

const GroupAddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4699_24468"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        width="24"
        height="24"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_4699_24468)">
      <path
        d="M12.5 11.95C12.9833 11.4167 13.3542 10.8083 13.6125 10.125C13.8708 9.44167 14 8.73333 14 8C14 7.26667 13.8708 6.55833 13.6125 5.875C13.3542 5.19167 12.9833 4.58333 12.5 4.05C13.5 4.18333 14.3333 4.625 15 5.375C15.6667 6.125 16 7 16 8C16 9 15.6667 9.875 15 10.625C14.3333 11.375 13.5 11.8167 12.5 11.95ZM18 20V17C18 16.4 17.8667 15.8292 17.6 15.2875C17.3333 14.7458 16.9833 14.2667 16.55 13.85C17.4 14.15 18.1875 14.5375 18.9125 15.0125C19.6375 15.4875 20 16.15 20 17V20H18ZM20 13V11H18V9H20V7H22V9H24V11H22V13H20ZM8 12C6.9 12 5.95833 11.6083 5.175 10.825C4.39167 10.0417 4 9.1 4 8C4 6.9 4.39167 5.95833 5.175 5.175C5.95833 4.39167 6.9 4 8 4C9.1 4 10.0417 4.39167 10.825 5.175C11.6083 5.95833 12 6.9 12 8C12 9.1 11.6083 10.0417 10.825 10.825C10.0417 11.6083 9.1 12 8 12ZM0 20V17.2C0 16.6333 0.145833 16.1125 0.4375 15.6375C0.729167 15.1625 1.11667 14.8 1.6 14.55C2.63333 14.0333 3.68333 13.6458 4.75 13.3875C5.81667 13.1292 6.9 13 8 13C9.1 13 10.1833 13.1292 11.25 13.3875C12.3167 13.6458 13.3667 14.0333 14.4 14.55C14.8833 14.8 15.2708 15.1625 15.5625 15.6375C15.8542 16.1125 16 16.6333 16 17.2V20H0ZM8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM2 18H14V17.2C14 17.0167 13.9542 16.85 13.8625 16.7C13.7708 16.55 13.65 16.4333 13.5 16.35C12.6 15.9 11.6917 15.5625 10.775 15.3375C9.85833 15.1125 8.93333 15 8 15C7.06667 15 6.14167 15.1125 5.225 15.3375C4.30833 15.5625 3.4 15.9 2.5 16.35C2.35 16.4333 2.22917 16.55 2.1375 16.7C2.04583 16.85 2 17.0167 2 17.2V18Z"
        fill="#5EC66F"
      />
    </g>
  </svg>
);

const ProjectsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4699_24455"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        width="24"
        height="24"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_4699_24455)">
      <path
        d="M9 21C8.45 21 7.97917 20.8042 7.5875 20.4125C7.19583 20.0208 7 19.55 7 19V9C7 8.45 7.19583 7.97917 7.5875 7.5875C7.97917 7.19583 8.45 7 9 7H19C19.55 7 20.0208 7.19583 20.4125 7.5875C20.8042 7.97917 21 8.45 21 9V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H9ZM9 11H19V9H9V11ZM13 15H15V13H13V15ZM13 19H15V17H13V19ZM9 15H11V13H9V15ZM17 15H19V13H17V15ZM9 19H11V17H9V19ZM17 19H19V17H17V19ZM5 17C4.45 17 3.97917 16.8042 3.5875 16.4125C3.19583 16.0208 3 15.55 3 15V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H15C15.55 3 16.0208 3.19583 16.4125 3.5875C16.8042 3.97917 17 4.45 17 5V6H15V5H5V15H6V17H5Z"
        fill="#2F6DE6"
      />
    </g>
  </svg>
);

const ContributeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4699_24440"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        width="24"
        height="24"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_4699_24440)">
      <path
        d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6458 8.025 11.4875C8.04167 11.3292 8.075 11.1667 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.0208 13.8042 13.4125 13.4125C13.8042 13.0208 14 12.55 14 12C14 11.45 13.8042 10.9792 13.4125 10.5875C13.0208 10.1958 12.55 10 12 10C11.45 10 10.9792 10.1958 10.5875 10.5875C10.1958 10.9792 10 11.45 10 12C10 12.55 10.1958 13.0208 10.5875 13.4125C10.9792 13.8042 11.45 14 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3292 15.975 11.4875C15.9917 11.6458 16 11.8167 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z"
        fill="#6F2DC1"
      />
    </g>
  </svg>
);

const SearchIcon = ({ size = "21", color = "#71717A" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10.3279"
      cy="10.5901"
      r="7.49047"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5376 16.1895L18.4743 19.1185"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EditIcon = ({ size = "20", color = "black" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4755_21552)">
      <path
        d="M13.395 1.39453L17.75 5.74954L6.10501 17.3945L1.75409 17.3904L1.75 13.0395L13.395 1.39453Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="clip0_4755_21552">
        <rect
          width="20"
          height="20"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

const TableViewFilterIcon = ({ size = "24", color = "#8E8E93" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
      fill={color}
    />
  </svg>
);

const ListViewFilterIcon = ({ size = "24", color = "#006FEE" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.54 2H7.92C9.33 2 10.46 3.15 10.46 4.561V7.97C10.46 9.39 9.33 10.53 7.92 10.53H4.54C3.14 10.53 2 9.39 2 7.97V4.561C2 3.15 3.14 2 4.54 2ZM4.54 13.4697H7.92C9.33 13.4697 10.46 14.6107 10.46 16.0307V19.4397C10.46 20.8497 9.33 21.9997 7.92 21.9997H4.54C3.14 21.9997 2 20.8497 2 19.4397V16.0307C2 14.6107 3.14 13.4697 4.54 13.4697ZM19.4601 2H16.0801C14.6701 2 13.5401 3.15 13.5401 4.561V7.97C13.5401 9.39 14.6701 10.53 16.0801 10.53H19.4601C20.8601 10.53 22.0001 9.39 22.0001 7.97V4.561C22.0001 3.15 20.8601 2 19.4601 2ZM16.0801 13.4697H19.4601C20.8601 13.4697 22.0001 14.6107 22.0001 16.0307V19.4397C22.0001 20.8497 20.8601 21.9997 19.4601 21.9997H16.0801C14.6701 21.9997 13.5401 20.8497 13.5401 19.4397V16.0307C13.5401 14.6107 14.6701 13.4697 16.0801 13.4697Z"
      fill={color}
    />
  </svg>
);

const HeartIcon = ({ size = "22", color = "black" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4788 8.8309C19.4697 6.50636 18.2501 4.32029 15.8457 3.54572C14.1947 3.01295 12.3963 3.30923 10.9997 5.31441C9.603 3.30923 7.8046 3.01295 6.15362 3.54572C3.74897 4.32038 2.52941 6.50686 2.52059 8.8317C2.49834 13.4551 7.18325 16.993 10.9985 18.684L10.9997 18.6835L11.0009 18.684C14.8163 16.9929 19.5016 13.4547 19.4788 8.8309Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

const RefreshIcon = ({ size = "14", color = "#71717A" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3278 7.0013C13.3278 10.2213 10.7145 12.8346 7.49447 12.8346C4.27447 12.8346 2.30863 9.5913 2.30863 9.5913M2.30863 9.5913H4.9453M2.30863 9.5913V12.508M1.66113 7.0013C1.66113 3.7813 4.25113 1.16797 7.49447 1.16797C11.3853 1.16797 13.3278 4.4113 13.3278 4.4113M13.3278 4.4113V1.49464M13.3278 4.4113H10.7378"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = ({ size = "24", color = "black" }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19.1953C3 18.9964 3.07902 18.8056 3.21967 18.665C3.36032 18.5243 3.55109 18.4453 3.75 18.4453H20.25C20.4489 18.4453 20.6397 18.5243 20.7803 18.665C20.921 18.8056 21 18.9964 21 19.1953C21 19.3942 20.921 19.585 20.7803 19.7256C20.6397 19.8663 20.4489 19.9453 20.25 19.9453H3.75C3.55109 19.9453 3.36032 19.8663 3.21967 19.7256C3.07902 19.585 3 19.3942 3 19.1953ZM3 14.6953C3 14.4964 3.07902 14.3056 3.21967 14.165C3.36032 14.0243 3.55109 13.9453 3.75 13.9453H20.25C20.4489 13.9453 20.6397 14.0243 20.7803 14.165C20.921 14.3056 21 14.4964 21 14.6953C21 14.8942 20.921 15.085 20.7803 15.2256C20.6397 15.3663 20.4489 15.4453 20.25 15.4453H3.75C3.55109 15.4453 3.36032 15.3663 3.21967 15.2256C3.07902 15.085 3 14.8942 3 14.6953ZM3 10.1953C3 9.9964 3.07902 9.80563 3.21967 9.66498C3.36032 9.52433 3.55109 9.44531 3.75 9.44531H20.25C20.4489 9.44531 20.6397 9.52433 20.7803 9.66498C20.921 9.80563 21 9.9964 21 10.1953C21 10.3942 20.921 10.585 20.7803 10.7256C20.6397 10.8663 20.4489 10.9453 20.25 10.9453H3.75C3.55109 10.9453 3.36032 10.8663 3.21967 10.7256C3.07902 10.585 3 10.3942 3 10.1953ZM3 5.69531C3 5.4964 3.07902 5.30563 3.21967 5.16498C3.36032 5.02433 3.55109 4.94531 3.75 4.94531H20.25C20.4489 4.94531 20.6397 5.02433 20.7803 5.16498C20.921 5.30563 21 5.4964 21 5.69531C21 5.89422 20.921 6.08499 20.7803 6.22564C20.6397 6.36629 20.4489 6.44531 20.25 6.44531H3.75C3.55109 6.44531 3.36032 6.36629 3.21967 6.22564C3.07902 6.08499 3 5.89422 3 5.69531Z"
      fill={color}
    />
  </svg>
);

const CloseCircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.461 14.389L14.4 15.45L11.999 13.051L9.599 15.447L8.539 14.386L10.938 11.991L8.539 9.593L9.6 8.532L12 10.931L14.401 8.534L15.461 9.596L13.061 11.991L15.461 14.389ZM12 2.25C6.624 2.25 2.25 6.624 2.25 12C2.25 17.376 6.624 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.624 17.376 2.25 12 2.25Z"
      fill="black"
    />
  </svg>
);

export {
  CloseCircleIcon,
  MenuIcon,
  CheckIcon,
  FireIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  UploadIcon,
  PlusIcon,
  MinusIcon,
  SunIcon,
  MoonIcon,
  CautionIcon,
  InfoIcon,
  RocketIcon,
  GroupAddIcon,
  ProjectsIcon,
  ContributeIcon,
  SearchIcon,
  EditIcon,
  TableViewFilterIcon,
  ListViewFilterIcon,
  HeartIcon,
  RefreshIcon,
};
