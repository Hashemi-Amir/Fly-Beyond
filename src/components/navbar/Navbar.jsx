import ThemeSwitcher from './ThemeSwitcher';
import Profile from './profile';

function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-50 flex h-14 min-h-fit items-center justify-between bg-white px-3 py-8 shadow-md dark:bg-dark-primary-800 dark:shadow-darkNavShadow">
      <ThemeSwitcher />
      <div className="w-28">
        <img src="\logo-no-background.png" />
      </div>
      <Profile />
    </nav>
  );
}

export default Navbar;
