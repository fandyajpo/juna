import ProductCount from "./productCount";
import ProductAddCart from "./productAddCart";
import ProductSave from "./productSave";
import { memo, useMemo } from "react";

interface Props {
  price: number;
  product: any;
  color: string[];
  size: string[];
}

const ProductOrder = memo((props: Props) => {
  const { price, product, color, size } = useMemo(() => props, [props]);
  return (
    <div className="border border-gray-300 rounded-xl p-4 w-80 h-fit hidden md:hidden lg:block flex-col justify-between gap-y-2 ">
      <ProductCount />

      <ProductAddCart price={price} product={product} />
      <ProductSave product={product} />
    </div>
  );
});

ProductOrder.displayName = "ProductOrder";
export default ProductOrder;
