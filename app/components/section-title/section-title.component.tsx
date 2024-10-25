import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import ChevronLeft from "@/public/assets/icons/chevron-left.svg";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";
import { clsxm } from "@/utils/twMerge.utils";
import type { ISectionTitle } from "./section-title.interfaces";

const SectionTitle = ({
  title,
  description,
  btnTitle,
  btnLink,
  onButtonClick,
  className,
  textColor,
}: ISectionTitle): JSX.Element => {
  return (
    <>
      <Stack spacing={2} alignItems="end" className={clsxm(className)}>
        <Header
          as="h2"
          weight="semibold"
          size="xxl"
          className={clsxm(
            "dark:text-white max-sm:text-md max-sm:w-full sm:font-['FocoTrial-Bold']",
            textColor
          )}
        >
          {title}
        </Header>
        {btnTitle && (
          <Button
            as="a"
            href={btnLink}
            className={clsxm(
              "hidden lg:block text-primary_red dark:text-primary_red_dark font-normal py-0 pb-[1px]",
              textColor
            )}
            onClick={onButtonClick}
          >
            <Stack alignItems="center" className="gap-1">
              {btnTitle}
              <ChevronRight
                fontSize={24}
                className={clsxm(
                  "rtl:hidden inline text-primary_red dark:text-primary_red_dark",
                  textColor
                )}
              />
              <ChevronLeft
                fontSize={24}
                className={clsxm(
                  "ltr:hidden inline text-primary_red dark:text-primary_red_dark",
                  textColor
                )}
              />
            </Stack>
          </Button>
        )}
      </Stack>

      {description && (
        <Text className={clsxm("w-full mt-2", textColor)} size="md">
          {description}
        </Text>
      )}
    </>
  );
};

export default SectionTitle;
