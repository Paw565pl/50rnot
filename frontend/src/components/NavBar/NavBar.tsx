import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary text-primary-content px-0">
      <div className="mx-auto container px-2 lg:px-0 flex justify-between lg:w-3/4 xl:w-1/2">
        <span className="text-3xl font-bold">50rnot</span>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
