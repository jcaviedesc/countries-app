import ColorScheme from "./color-scheme";
import Search from "./search";

function Header() {
  return (
    <header className="sticky top-0">
      <div className="bg-white shadow-md p-4 dark:bg-dark-blue">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4 ">
          <h1 className="text-black text-lg font-extrabold dark:text-white">
            Where in the word?
          </h1>
          <ColorScheme />
        </div>
      </div>
      <div className="mx-auto max-w-7xl  mt-16">
        <Search />
      </div>
    </header>
  );
}

export default Header;
