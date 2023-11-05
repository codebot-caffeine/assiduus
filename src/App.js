
import './App.css';
import Header from './navbar/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home';

function App() {
 return (
   <Routes>
     <Route path="/" Component={Header}>
       <Route
         index
         Component={(routeProps) => {
           return <Home {...routeProps} />;
         }}
       />
       <Route
       path="account-balance"
       Component={(routeProps) => {
         return <Home {...routeProps} />;
       }}
     />
     <Route
       path="payroll"
       Component={(routeProps) => {
         return <Home {...routeProps} />;
       }}
     />
     <Route
       path="reports"
       Component={(routeProps) => {
         return <Home {...routeProps} />;
       }}
     />
     <Route
       path="advisor"
       Component={(routeProps) => {
         return <Home {...routeProps} />;
       }}
     />
     <Route
       path="contacts"
       Component={(routeProps) => {
         return <Home {...routeProps} />;
       }}
     />
     </Route>
     
   </Routes>
 );
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
