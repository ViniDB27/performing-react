import { memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";

import dynamic from "next/dynamic";

const AddProductToWishList = dynamic<AddProductToWishListProps>(() =>
  import("./AddProductToWishList").then((mod) => mod.AddProductToWishList)
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddishList }: ProductItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {product.title} - {product.price}
      <button onClick={() => setIsOpen(true)}>Add</button>
      {isOpen && (
        <AddProductToWishList
          onAddToWishList={() => onAddishList}
          onRequestClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
