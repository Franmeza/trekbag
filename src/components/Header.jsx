function Header({ totalNumberOfItems, itemsPacked }) {
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
