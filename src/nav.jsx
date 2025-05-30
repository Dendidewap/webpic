import dew from "./img/dew.png";
const Nav = () => {
  return (
    <nav className=" nav flex items-center justify-between flex-wrap bg-sky-300 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={dew} className="rea ml-10 mr-0.5" alt="" />
        <span className="font-semibold text-lg tracking-tight font-serif">
          Dendew.com
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-slate-300 hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg dewo lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Portofolio
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Skills
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Certificate
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border mr-5 rounded text-white border-sky-400 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
