import { useEffect } from "react";

const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (e: MouseEvent) => unknown,
  excluded: () => (HTMLElement | null)[] = () => []
) => {
  const listener = (e: MouseEvent) => {
    const result = [ref.current, ...excluded()].every((el) => {
      if (!el?.contains(e.target as Node) && el?.offsetParent) {
        return true;
      }else {
        return false;
      }
    });

    if (result === true) callback(e);
  };

  useEffect(() => {
    window.addEventListener("mouseup", listener);
    return () => {
      window.removeEventListener("mouseup", listener);
    };
  });
};

export default useOnClickOutside;
