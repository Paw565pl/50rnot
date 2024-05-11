import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary px-0 text-primary-content">
      <div className="container mx-auto flex justify-between px-2 lg:w-3/4 lg:px-0 xl:w-1/2">
        <span className="text-3xl font-bold">50rnot</span>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
