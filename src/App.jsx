import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import { initialItems } from "./utils/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
