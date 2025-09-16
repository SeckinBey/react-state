import Item from "./Items";
import NoItem from "./NoItem";

export default function ListItems({ products }) {
  return (
    <ul className="shopping-list list-unstyled">
      {products.length > 0 ? (
        products.map((i, index) => <Item product={i} key={index} />)
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
