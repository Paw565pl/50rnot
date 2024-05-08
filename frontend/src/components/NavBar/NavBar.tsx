import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary text-primary-content">
      <div className="container mx-auto lg:w-1/2 flex justify-between pl-2">
        <span className="text-3xl font-bold">50rnot</span>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
