import Button from "@/components/common/button";
import TypographyHeader from "@/components/common/typography/header";
import HOConClickOutside from "@/hocs/HOConClickOutside";
import CloseIcon from "@/public/assets/icons/close.svg";
import { clsxm } from "@/utils/twMerge.utils";
import React, { forwardRef } from "react";

type Slots = (arg: {
  children: string | boolean | JSX.Element | JSX.Element[];
  className?: string;
  noDefaultPadding?: boolean;
}) => JSX.Element | JSX.Element[] | string;

const Header: Slots = ({ children, className }) => (
  <div className={className || ""}>{children} </div>
);

const Body: Slots = ({ children, className, noDefaultPadding }) => (
  <div
    className={(noDefaultPadding ? "" : "px-4 md:px-8 ") + (className || "")}
  >
    {children}{" "}
  </div>
);
const Footer: Slots = ({ children, className }) => (
  <div className={"flex py-4 px-4 md:px-8 " + (className || "")}>
    {children}
  </div>
);

const ModalWithRef = forwardRef(
  (
    props: {
      align?: "middle" | "left" | "right";
      children: JSX.Element | JSX.Element[];
      title?: string;
      show: boolean;
      onClose: () => void;
      rootClassName?: string;
      baseClassName?: string;
      className?: string;
      "data-no-html"?: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    let header, body, footer;
    const align = props.align || "middle";
    const applyStylePosition = (() => {
      if (align === "middle") return "mx-auto md:my-10 rounded-[16px]";
      if (align === "left") return "float-left  w-full md:w-[42%]";
      if (align === "right") return "float-right w-full md:w-[42%]";
      return "middle";
    })();
    const applyStyleHeight = (() => {
      if (align === "middle")
        return (
          (footer && "py-4 md:py-8 ") +
          "min-h-screen md:min-h-fit md:rounded-xl"
        );
      if (align === "left") return "pt-4 md:pt-8 min-h-screen";
      if (align === "right") return "pt-4 md:pt-8 min-h-screen";
      return "middle";
    })();

    React.Children.forEach(props.children, (child) => {
      if (!React.isValidElement(child)) return;
      if (child.type === Header) {
        header = child;
      } else if (child.type === Body) {
        body = child;
      } else if (child.type === Footer) {
        footer = child;
      }
    });

    return (
      props.show && (
        <>
          <div
            className={clsxm(
              "bg-custom_divider3 fixed left-0 top-0 z-[70] h-full w-full overflow-y-auto overflow-x-hidden",
              props.baseClassName
            )}
            role="dialog"
            aria-label="dialog"
            ref={ref}
            {...(props["data-no-html"] ? { "data-no-html": true } : {})}
          >
            <HOConClickOutside on={props.onClose}>
              <div
                className={clsxm(
                  `pointer-events-none relative flex min-h-full w-full md:w-auto items-center ${applyStylePosition} md:max-w-[800px]`,
                  props.rootClassName
                )}
              >
                <div
                  className={clsxm(
                    ` pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-goki_dark ${applyStyleHeight}`,
                    props.className
                  )}
                >
                  <div className="px-4 md:px-8 sticky rounded-[inherit] top-0 bg-white/90 dark:bg-goki_dark/90 z-50 flex flex-row w-full justify-between pb-0 md:py-4">
                    {header
                      ? header
                      : props.title && (
                          <>
                            <TypographyHeader
                              className="my-2 self-start text-xl md:text-2xl dark:text-white"
                              as="h3"
                              weight="semibold"
                            >
                              {props.title}
                            </TypographyHeader>

                            <Button
                              className="self-middle max-w-min min-w-min p-0 dark:text-white"
                              endIcon={<CloseIcon width={22} height={22} />}
                              onClick={props.onClose}
                            />
                          </>
                        )}
                  </div>
                  {body}
                  {footer}
                </div>
              </div>
            </HOConClickOutside>
          </div>
        </>
      )
    );
  }
);

const Modal = ModalWithRef as typeof ModalWithRef & {
  Header: Slots;
  Body: Slots;
  Footer: Slots;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
