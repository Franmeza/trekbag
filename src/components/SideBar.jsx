import AddItemForm from "./AddItemForm";
import ButtonsGroup from "./ButtonsGroup";

function SideBar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIcomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonsGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIcomplete={handleMarkAllAsIcomplete}
      />
    </div>
  );
}

export default SideBar;
