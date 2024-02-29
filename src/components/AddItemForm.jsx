import Button from "./Button";

function AddItemForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2> Add an item</h2>
      <input type="text" />
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddItemForm;
