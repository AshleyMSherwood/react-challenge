import React, { useState } from "react";
import logo from './logo.png';
import background from './home-background.jpg';
import './App.css';
import Detail from "./Detail.js";
import Recipes from "./Recipes.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faLongArrowAltLeft, faHeart)

function App() {

  return (
    
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}
function Home() {
  const [search, setSearch] = useState("");

  function onUpdateSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <div className="homepage-img-container">
        <img className="homepage-bgd" src={background} alt="homepage background" />
        <img src={logo} className="app-logo" alt="logo" />
      </div>
      <form className="search-form">
        <input className="search-box" type="text" />
        <button className="search-button" type="submit" value={search} onChange={onUpdateSearch}>Search</button>
      </form>
      <p className="daily-recipes">Recipes of the day</p>
      <Recipes name="recipes"/>
    </>
  );
}

export default App;
