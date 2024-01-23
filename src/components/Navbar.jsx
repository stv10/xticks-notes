export const Navbar = () => {
  return (
    <nav className=" border-gray-200 bg-stone-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse rounded-lg p-2"
        >
          <img src="vite.svg" className="h-6" alt="Xticks Logo" />
          <span className="self-center text-base font-semibold whitespace-nowrap text-stone-800">
            Xticks
          </span>
        </a>
        <div>
          <ul></ul>
        </div>
      </div>
    </nav>
  );
};
