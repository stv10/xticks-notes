export const Navbar = () => {
  return (
    <header className=" border-gray-200 bg-slate-800  max-h-14">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse rounded-lg p-2"
        >
          <img src="vite.svg" className="h-6" alt="Xticks Logo" />
          <span className="self-center text-base font-semibold whitespace-nowrap text-stone-300">
            Xticks
          </span>
        </a>
        <section>
          <ul></ul>
        </section>
      </nav>
    </header>
  );
};
