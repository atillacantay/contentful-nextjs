import { clsxm } from "@/utils/twMerge.utils";

import * as React from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: IInput): JSX.Element => {
  return <input className={clsxm(className)} {...props} />;
};

export default Input;
