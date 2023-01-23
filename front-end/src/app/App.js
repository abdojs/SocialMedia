import { useTranslation } from 'react-i18next';
import { FaBeer } from 'react-icons/fa';
import Box from '@mui/material/Box';
import './App.css';
function App() {
  const [t] = useTranslation()
  return (
    <Box className="App">
      {t('title')}
      <FaBeer />
    </Box>
  );
}

export default App;
