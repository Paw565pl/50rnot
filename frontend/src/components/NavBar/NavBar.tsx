import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary text-primary-content md:px-36 xl:px-80 flex justify-between">
      <div className="text-3xl font-bold">50rnot</div>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
