/**
 * Smooth scrolls to the provided element within the container.
 * @param containerRef - The reference to the scrollable container.
 * @param elementSelector - The CSS selector of the target element to scroll to.
 */
export const smoothScrollToElement = (
  containerRef: React.RefObject<HTMLElement>,
  elementSelector: string
): void => {
  if (containerRef.current) {
    const element = containerRef.current.querySelector(
      elementSelector
    ) as HTMLElement | null;

    if (element) {
      const scrollPosition =
        element.offsetLeft +
        element.clientWidth / 2 -
        containerRef.current.offsetWidth / 2;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }
};
