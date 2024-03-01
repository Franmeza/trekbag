import AddItemForm from "./AddItemForm";
import ButtonsGroup from "./ButtonsGroup";

function SideBar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonsGroup />
    </div>
  );
}

export default SideBar;
