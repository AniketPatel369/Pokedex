import AppRoutes from './routes/AppRoutes';
import useThemeStore from './store/themeStore';
import { useEffect } from 'react';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="bg-background dark:bg-dark-background min-h-screen text-text dark:text-dark-text font-pokemon">
      <AppRoutes />
    </div>
  );
}

export default App;
