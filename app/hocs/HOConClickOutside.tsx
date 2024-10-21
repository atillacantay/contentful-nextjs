import useOnClickOutside from "@/hooks/useOnClickOutside";
import React, { useRef } from "react";

const HOConClickOutside = ({
  children,
  excluded,
  on,
}: {
  children: boolean | React.ReactElement;
  excluded?: () => (HTMLElement | null)[];
  on: (e: MouseEvent) => unknown;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, on, excluded);

  const putRef = (child: React.ReactElement) =>
    child && React.cloneElement(child as React.ReactElement, { ref });

  return <>{putRef(children as React.ReactElement)}</>;
};

export default HOConClickOutside;
