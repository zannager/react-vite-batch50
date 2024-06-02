// App.js
import { useState } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
