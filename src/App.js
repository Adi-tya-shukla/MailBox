import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRoutes from './Components/Routes/PageRoutes';

function App() {
  return (
    <Fragment>
    <Router>
      <PageRoutes/>
    </Router>
  </Fragment>

  );
}

export default App;
