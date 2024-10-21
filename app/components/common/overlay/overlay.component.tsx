import { clsxm } from "@/utils/twMerge.utils";

interface IOverlay extends React.ComponentProps<"div"> {
  active: boolean;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Overlay = ({
  active,
  children,
  className,
  ...props
}: IOverlay): JSX.Element | null => {
  const overlayStyle =
    'before:content-[""] before:invisible before:opacity-0 before:bg-custom_divider3 before:fixed before:w-full before:h-full before:top-0 before:left-0';
  const overlayActiveStyle = "before:visible before:opacity-100";

  return (
    <div
      className={clsxm(overlayStyle, active && overlayActiveStyle, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Overlay;
