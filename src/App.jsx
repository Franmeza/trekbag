import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <SideBar />
        <ItemList />
      </main>
      <Footer />
    </>
  );
}

export default App;
