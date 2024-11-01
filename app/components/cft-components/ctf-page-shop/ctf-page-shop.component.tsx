import { PageShop } from "lib/__generated/sdk";
import ShopDetails from "./shop-details";

interface CtfPageShopProps {
  page: PageShop;
}

const CtfPageShop = ({ page }: CtfPageShopProps) => {
  return <ShopDetails product={page} />;
};

export default CtfPageShop;
