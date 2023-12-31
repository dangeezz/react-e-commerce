import { Button, SecondaryButton } from "@/components/button";

import { ReactComponent as HeartIcon } from "@/assets/icons/heart.svg";
import { ProductImage } from "./ProductImage";
import { Rating } from "./Rating";

const FavouriteButton = () => {
  return (
    <Button className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow">
      <HeartIcon className="w-5 h-5" />
    </Button>
  )
}

export const Product = () => {
  return (
    <div className="relative leading-loose">
      <ProductImage />

      <div className="flex items-center justify-between mt-2 font-semibold">
        <span className="">Wireless Earbuds, IPX8</span>
        <span className="">
          <sup className="text-xs">&#36;</sup>
          <span>289</span>
          <sup className="text-xs">.00</sup>
        </span>
      </div>

      <div className="text-sm">Organic Cotton, fairtrade certified.</div>

      <Rating />

      <SecondaryButton className="p-1 px-6">Add to Cart</SecondaryButton>

      <div className="absolute top-4 right-4">
        <FavouriteButton />
      </div>
    </div>
  );
};

export default Product;
