import Select from "react-select";
import EmptyView from "./EmptyView";
import { sortingOptions } from "../utils/constants";
import { useMemo, useState } from "react";

function ItemList({ items, handleDeleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState("default");

  //Using useMemo improve performance by not sorting every time the component re-renders. It will do only when items or sort by change
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") return b.packed - a.packed;
        if (sortBy === "unpacked") return a.packed - b.packed;
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default ItemList;
