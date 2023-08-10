import ColorScheme from "./color-scheme";
import Dropdown from "./dropdown";
import Filters from "./filters";
import Search from "./search";

function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 dark:bg-dark-blue z-10">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4 ">
        <h1 className="text-black text-lg font-extrabold dark:text-white">
          Where in the word?
        </h1>
        <ColorScheme />
      </div>
    </header>
  );
}

export default Header;
