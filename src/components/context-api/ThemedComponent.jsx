// ThemedComponent.js
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  return <div style={styles}>The current theme is {theme}</div>;
};

export default ThemedComponent;
