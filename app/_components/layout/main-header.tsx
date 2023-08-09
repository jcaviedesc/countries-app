function MainHeader() {
  return (
    <header className="sticky top-0 bg-white border-b shadow-md p-4">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
        <h1 className="text-black text-lg font-extrabold">
          Where in the word?
        </h1>
        <div>
          {/* icon */}
          <span>
            {/* handle interaction */}
            Dark Mode
          </span>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
