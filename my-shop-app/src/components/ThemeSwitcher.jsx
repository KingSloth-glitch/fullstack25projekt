import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      byt till {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
