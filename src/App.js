import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material"
import Header from './navbar/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home';

function App() {
 return(
  <Routes>
    <Route path='/' Component={Header}>
        <Route index element={<Home />} />
        <Route path='account-balance' element={<Home />} />
        <Route path='payroll' element={<Home />} /> 
        <Route path='reports' element={<Home />} />
        <Route path='advisor' element={<Home />} />
        <Route path='contacts' element={<Home />} />
    </Route>
  </Routes>
 )
}

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

export default App;
