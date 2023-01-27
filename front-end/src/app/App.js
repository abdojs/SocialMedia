import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import SingIn from '../pages/SingIn/SingIn';
import Test from '../pages/tests/Test';
import './App.css';
function App() {
  const Not = () => {
    return (<Box >
      opps ! 404 page not found
    </Box>)
  }

  const Home = () => {
    return (<Box >
      page home
    </Box>)
  }
  return (




    <Box className="amout" >
      <BrowserRouter>
        <Routes>  
          <Route path='/' excat name="sing-in" element={<Home />} ></Route>
          <Route path='/account/login' name="sing-in" element={<SingIn />} ></Route>
          <Route path='/account/create' name="sing-in" element={<SingIn />} ></Route>
          <Route path='/test' name="sing-in" element={<Test />} ></Route>
          <Route path='*' name="sing-in" element={<Not />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
