import Button from "@/components/common/button";
import SectionTitle from "@/components/section-title";
import type { ISectionTitle } from "@/components/section-title/section-title.interfaces";
import { clsxm } from "@/utils/twMerge.utils";
import { ReactNode } from "react";

interface ISection {
  sectionTitle: ISectionTitle;
  children: ReactNode;
  className?: string;
  sectionClassName?: string;
  showXItemsOnMobile?: 0 | 1 | 2 | 3 | 4;
  showMobileButton?: boolean;
  showMoreClassName?: string;
}

const Section: React.FC<ISection> = ({
  sectionTitle,
  children,
  className,
  sectionClassName,
  showXItemsOnMobile,
  showMobileButton,
  showMoreClassName,
}: ISection): JSX.Element => {
  const classListOfHideItem =
    showXItemsOnMobile !== undefined
      ? [
          "max-sm:[&_.show-x-items-on-mobile]:hidden",
          "max-sm:[&_.show-x-items-on-mobile:nth-child(n+2)]:hidden",
          "max-sm:[&_.show-x-items-on-mobile:nth-child(n+3)]:hidden",
          "max-sm:[&_.show-x-items-on-mobile:nth-child(n+4)]:hidden",
          "max-sm:[&_.show-x-items-on-mobile:nth-child(n+5)]:hidden",
        ][showXItemsOnMobile]
      : "";
  return (
    <div className={clsxm("flex flex-col", classListOfHideItem, className)}>
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
        btnLink={sectionTitle.btnLink}
        btnTitle={sectionTitle.btnTitle}
        onButtonClick={sectionTitle.onButtonClick}
        className={sectionClassName || ""}
        textColor={sectionTitle.textColor}
      />
      <div className="mt-8" />
      {children}
      {showMobileButton && (
        <Button
          as="a"
          href={sectionTitle.btnLink}
          variant="contained"
          className={clsxm(
            "md:hidden w-full bg-primary_red text-white mt-8 text-sm",
            showMoreClassName
          )}
          size="xl"
        >
          {sectionTitle.btnTitle}
        </Button>
      )}
    </div>
  );
};

export default Section;
