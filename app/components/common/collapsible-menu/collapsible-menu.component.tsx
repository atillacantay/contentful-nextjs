import Text from "@/components/common/typography/text";
import Minus from "@/public/assets/icons/minus.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { clsxm } from "@/utils/twMerge.utils";
import { ICollapsibleMenu } from "./collapsible-menu.interface";

const CollapsibleMenu = ({
  items,
  rootClassName,
  headerClassName,
  contentClassName,
}: ICollapsibleMenu) => {
  return (
    <div className="mx-auto w-full">
      <section className="grid grid-cols-1 gap-y-3">
        {items.map((item) => (
          <details
            key={item.key}
            className={clsxm(
              "group text-lg border-b border-black/10 dark:border-white/10 group-open:mb-16",
              rootClassName
            )}
          >
            <summary
              className={clsxm(
                "flex cursor-pointer flex-row items-center justify-between py-4",
                headerClassName
              )}
            >
              <Text weight="medium">{item.header}</Text>
              <Minus className="h-6 w-6 hidden transform text-primary_red dark:text-white group-open:block" />
              <Plus className="h-6 w-6 block transform text-primary_red dark:text-white group-open:hidden" />
            </summary>
            <div
              className={clsxm("mt-2 mb-4 dark:text-white", contentClassName)}
            >
              {item.content}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
};

export default CollapsibleMenu;
