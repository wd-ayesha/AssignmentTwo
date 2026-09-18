import { Link, NavLink } from "react-router";

const Header = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-10 justify-between">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <NavLink
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold"
        >
          🎬Movie<span className="text-blue-800">Explorer</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end menu menu-horizontal">
        <Link to="/movies" className="link-primary">
          All Movies
        </Link>
      </div>
    </div>
  );
};

export default Header;
