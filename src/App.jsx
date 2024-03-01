import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import { initialItems } from "./utils/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemName) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemName,
      packed: false,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const itemsCompleted = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(itemsCompleted);
  };

  const handleMarkAllAsIcomplete = () => {
    const itemsIcompleted = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(itemsIcompleted);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIcomplete={handleMarkAllAsIcomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
