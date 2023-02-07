import { Fragment, useContext } from 'react';
import { Routes, BrowserRouter, Route, Navigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/Auth/Auth";
import Box from '@mui/material/Box';
import SingIn from '../pages/SingIn/SingIn';
import SingUp from '../pages/SingUp/SingUp';
import './App.css';
function App() {

  const { user } = useContext(AuthContext)

  const writeRouter = () => {
    if (user === null)
      return (
        <Fragment>
          <Route path='/account/login' name="sing-in" element={<SingIn />} ></Route>
          <Route path='/account/create' name="sing-up" element={<SingUp />} ></Route>
          <Route path='/*' element={<Navigate to="/account/login" replace />} />
        </Fragment>)
    return (
      <Fragment>
        <Route path='/' excat name="sing-in" element={<Home />} ></Route>
        <Route path='/fed' excat name="sing-in" element={<Fed />} ></Route>
        <Route path='/account/*' element={<Navigate to="/" replace />}  ></Route>
      </Fragment>)
  }

  return (
    <Box className="amout" >
      <BrowserRouter>
        <Routes>
          {writeRouter()}
          <Route path='*' name="notfound" element={<Not />}></Route>
        </Routes>
      </BrowserRouter>
    </Box >
  );
}

export default App;

const Not = () => {
  return (<Box >
    opps ! 404 page not found
  </Box>)
}

const Home = () => {
  return (<Box >
    <Link to="/fed">link to page fed</Link>
    page home
  </Box>)
}

const Fed = () => {
  return (<Box >
    <Link to="/">link to page home</Link>
    page fed
  </Box>)
}