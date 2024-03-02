import AddItemForm from "./AddItemForm";
import ButtonsGroup from "./ButtonsGroup";
import { useItemContext } from "../hooks/useItemsContext";

function SideBar() {
  const { handleAddItem } = useItemContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonsGroup />
    </div>
  );
}

export default SideBar;
