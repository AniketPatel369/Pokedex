import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import useThemeStore from '../store/themeStore';

const MainLayout = () => {
  const { theme } = useThemeStore();
  
  // Apply theme class to document when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-primary dark:bg-dark-primary text-white p-4 shadow-md animate-fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="font-pokemon text-xl md:text-2xl">Pokédex</Link>
          <nav className="flex items-center space-x-4">
            <Link to="/starter" className="nav-link">Starters</Link>
            <Link to="/library" className="nav-link">Library</Link>
            <Link to="/team" className="nav-link">Team</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary dark:bg-dark-primary text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="font-pokemon text-sm">Pokédex &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;