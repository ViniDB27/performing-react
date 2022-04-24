import { ProductItem } from "./ProductItem";
import { useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";

interface Product {
  id: number;
  price: number;
  title: string;
}

interface SearchResultsProps {
  results: Product[];
  onAddishList: (id: number) => void;
  totalPrice: number;
}

export function SearchResults({
  results,
  onAddishList,
  totalPrice,
}: SearchResultsProps) {
  //   const totalPrice = useMemo(() => {
  //     return results.reduce((count, prod) => {
  //       return count + prod.price;
  //     }, 0);
  //   }, [results]);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem onAddishList={onAddishList} product={results[index]} />
      </div>
    );
  };

  return (
    <div>
      <p>Total:{totalPrice}</p>

      <List
        height={300}
        rowHeight={30}
        width={400}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map((product) => {
        return <ProductItem onAddishList={onAddishList} key={product.id} product={product} />;
      })} */}
    </div>
  );
}
