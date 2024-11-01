"use client";

import ButtonIcon from "@/components/common/button/button-icon.component";
import Stack from "@/components/common/stack";

// import  Calendar  from "@/public/assets/icons/calendar-clear-outline.svg";
import { useRouter } from "@/i18n/routing";
import ChevronLeft from "@/public/assets/icons/chevron-left.svg";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";
// import  Share  from "@/public/assets/icons/share.svg";
// import { clsxm } from "@/utils/twMerge.utils";

const HeaderMini = ({}: // formSaveForLaterIcon = ModelFormSaveForLaterIcon,
// showMealPlanner = true,
{
  // formSaveForLaterIcon: React.ComponentProps<typeof FormSaveForLaterIcon>;
  // showMealPlanner?: boolean;
}) => {
  const { back } = useRouter();

  return (
    <div data-cmp="header-mini" className="flex-1">
      <Stack
        alignItems="center"
        justifyContent="between"
        className="flex-1 pt-11 px-4 pb-4"
      >
        <ButtonIcon onClick={back} className="bg-transparent text-white">
          <ChevronRight fontSize={24} className="ltr:hidden" />
          <ChevronLeft fontSize={24} className="rtl:hidden" />
        </ButtonIcon>
        {/* <Stack alignItems="center" spacing={4}>
        <ButtonIcon className="bg-transparent text-white">
          <Share fontSize={24} fill="text-white" />
        </ButtonIcon>
       {
         showMealPlanner ?  <ButtonIcon className="bg-transparent text-white">
         <Calendar fontSize={24} />
       </ButtonIcon> : <></>
       }
        <FormSaveForLaterIcon
          props={formSaveForLaterIcon}
          className={clsxm(
            "bg-transparent [&_svg]:!text-2xl",
            formSaveForLaterIcon[0] !== "true" && "[&_svg]:!text-white"
          )}
        />
      </Stack> */}
      </Stack>
    </div>
  );
};

export default HeaderMini;
