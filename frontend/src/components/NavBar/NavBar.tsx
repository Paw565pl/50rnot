import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary text-primary-content mb-10">
      <div className="container mx-auto lg:w-1/2 flex justify-between">
        <span className="text-3xl font-bold">50rnot</span>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
