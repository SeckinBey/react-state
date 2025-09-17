export default function Item({
  product,
  onDeleteItem,
  onUpdateItem,
  filterButton,
}) {
  if (filterButton == "incomplete" && product.completed) {
    return null;
  }

  if (filterButton == "completed" && !product.completed) {
    return null;
  }

  return (
    <li className="border rounded p-2 mb-1 d-flex">
      <input
        type="checkbox"
        className="form-check-input"
        checked={product.completed}
        onChange={() => onUpdateItem(product.id)}
      />
      <div
        className="item-name"
        style={
          product.completed
            ? { textDecoration: "line-through", color: "#999" }
            : {}
        }
      >
        {product.name}
      </div>
      <i
        className="fs-3 bi bi-x text-danger delete-icon"
        onClick={() => onDeleteItem(product.id)}
      ></i>
    </li>
  );
}
