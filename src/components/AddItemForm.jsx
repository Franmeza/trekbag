import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ setItems }) {
  const [itemName, setItemName] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const inputRef = useRef(); //To reference the input element

  const handleChange = (e) => {
    setShowWarning(false);
    setItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName) {
      setShowWarning(true);
      inputRef.current.focus(); // it focuses the
      return;
    }
    const newItem = {
      id: new Date().getTime(), //To create a unique id for each entry
      name: itemName,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2> Add an item</h2>
      <input
        onChange={handleChange}
        value={itemName}
        ref={inputRef}
        type="text"
        autoFocus
      />
      {showWarning ? (
        <span className="warning-message">Field can't be empty</span>
      ) : (
        ""
      )}
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddItemForm;
