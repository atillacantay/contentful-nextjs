import { clsxm } from "@/utils/twMerge.utils";

interface ISpinner {
  size: number;
  className?: string;
}

const Spinner = ({ size = 4, className }: ISpinner) => {
  const calculatedSize = size * 4;
  return (
    <svg
      className={clsxm(`animate-spin -ml-1 mr-3 text-white`, className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={`${calculatedSize}px`}
      height={`${calculatedSize}px`}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Spinner;
