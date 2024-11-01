import Button from "@/components/common/button/button.component";
import QuantitySelector from "@/components/common/quantity-selector/quantity-selector.component";
import Stack from "@/components/common/stack/stack.component";
import Text from "@/components/common/typography/text";
import useIngredientShoppingList, {
  ShoppingListIngredient,
} from "@/hooks/useIngredientShoppingList";
import ShoppingList from "@/public/assets/icons/shopping-list.svg";
import { EventKeys, pushEventToDataLayer } from "@/utils/event-utils";
import { clsxm } from "@/utils/twMerge.utils";
import { cloneElement, useState } from "react";

interface Props extends React.ComponentProps<"div"> {
  qtyLabel: string;
  addButtonLabel: string;
  quantity: number;
  buyNowLinks: {
    label: string;
    link: string;
    logoURL: string;
  }[];
  redirectURL: string;
  loginURL: string;
  isAuthenticated: boolean;
  productName: string;
  productImage: string;
  productCategoryName: string;
  productInfo: string;
}
const FormShopDetailsQuantity = ({
  qtyLabel,
  addButtonLabel,
  quantity,
  className,
  userId,
  ingredientId,
  unit,
  productId,
  productName,
  productImage,
  productCategoryName,
  productInfo,
  productAmount = 0,
  buyNowLinks,
  redirectURL,
  loginURL,
  isAuthenticated,
}: Props & ShoppingListIngredient) => {
  const { add, isLoading } = useIngredientShoppingList();
  const [localProductAmount, setLocalProductAmount] =
    useState<number>(productAmount);

  const save = async () => {
    await add(
      [
        {
          userId,
          ingredientId,
          quantity,
          unit,
          productId,
          productAmount: localProductAmount,
        },
      ],
      () => {
        const data = {
          product_name: productName,
          product_id: productId,
          product_image: productImage,
          category: productCategoryName,
          info: productInfo,
        };
        pushEventToDataLayer(EventKeys.ADD_TO_SHOPPING_LIST, data);

        window.location.href = redirectURL;
      }
    );
  };

  const handleBuyNowEvent = () => {
    pushEventToDataLayer(EventKeys.BUY_NOW, {
      product_name: productName,
      product_id: productId,
      product_image: productImage,
      category: productCategoryName,
      info: productInfo,
    });
  };

  const BuyNowButtons = (
    <div className="w-full flex flex-col space-y-4">
      {buyNowLinks?.map(({ label, link, logoURL }) => (
        <Button
          as="a"
          href={link}
          variant="contained"
          size="xl"
          className="bg-primary_red font-medium"
          fullWidth
          target="_blank"
          onClick={handleBuyNowEvent}
        >
          <Stack className="gap-4">
            {label}
            <div className="border border-custom_divider4" />
            {logoURL && <img src={logoURL} />}
          </Stack>
        </Button>
      ))}
    </div>
  );

  return (
    <div>
      {isAuthenticated && (
        <Stack data-no-html className="items-center gap-2 mb-8">
          <Text weight="medium" size="sm">
            {qtyLabel}
          </Text>

          <QuantitySelector
            value={localProductAmount}
            onDecrease={() =>
              setLocalProductAmount(Math.max(1, localProductAmount - 1))
            }
            onIncrease={() => setLocalProductAmount(localProductAmount + 1)}
            disabled={isLoading}
          />
        </Stack>
      )}

      <Stack data-no-html spacing={4} className="mb-8">
        {cloneElement(BuyNowButtons, {
          className: clsxm(
            cloneElement(BuyNowButtons).props.className,
            "max-lg:hidden"
          ),
        })}
        {isAuthenticated ? (
          <Button
            variant="outlined"
            size="xl"
            className="text-primary_red font-medium h-fit"
            fullWidth
            startIcon={<ShoppingList />}
            onClick={save}
            disabled={isLoading}
          >
            {addButtonLabel}
          </Button>
        ) : (
          <Button
            variant="outlined"
            as="a"
            href={loginURL}
            size="xl"
            className="text-primary_red font-medium h-fit"
            fullWidth
            startIcon={<ShoppingList />}
            disabled={isLoading}
          >
            {addButtonLabel}
          </Button>
        )}
      </Stack>

      <Stack
        data-no-html
        id="mobile-shop-footer"
        direction="col"
        className="fixed w-full bottom-0 left-0 z-[60] px-4 py-9 gap-4 bg-white dark:bg-goki_dark lg:hidden"
      >
        {BuyNowButtons}
      </Stack>
    </div>
  );
};

export default FormShopDetailsQuantity;
