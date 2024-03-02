import { useItemContext } from "../hooks/useItemsContext";

function Header() {
  const { items } = useItemContext();

  const totalNumberOfItems = items.length;
  const itemsPacked = items.filter((items) => items.packed).length;

  return (
    <header className="header">
      <img
        src="https://bytegrad.com/course-assets/react-nextjs/dots.png"
        alt="dots"
      />
      <p>
        <b>{itemsPacked}</b> / {totalNumberOfItems} items packed
      </p>
    </header>
  );
}

export default Header;
