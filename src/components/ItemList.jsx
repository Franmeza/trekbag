function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label htmlFor="">
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}

export default ItemList;
