import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home'
import About from './routes/About'
import Detail from './routes/Detail';
import Filter from './components/Filter';
import Nodata from './routes/Nodata';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
      <Route path="/filteroption" component={Filter}/>
      <Route path="/no-data" component={Nodata}/>
    </HashRouter>
  );
}

export default App;