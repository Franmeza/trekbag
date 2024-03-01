import AddItemForm from "./AddItemForm";
import ButtonsGroup from "./ButtonsGroup";

function SideBar({ handleAddItem }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonsGroup />
    </div>
  );
}

export default SideBar;
