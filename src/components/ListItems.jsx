import Item from "./Items";
import NoItem from "./NoItem";

export default function ListItems({ items, onDeleteItem }) {
  return (
    <ul className="shopping-list list-unstyled">
      {items.length > 0 ? (
        items.map((i, index) => (
          <Item product={i} key={index} onDeleteItem={onDeleteItem} />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
