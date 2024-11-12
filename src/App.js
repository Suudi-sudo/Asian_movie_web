import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./PagesCompo/Home";
import Navbar from "./components/Navbar";
import Popular from "./PagesCompo/Popular";
import Trending from "./PagesCompo/Trending";
import AllDrama from "./PagesCompo/AllDrama";
import "./App.css"
function App () {

  return (
    <Router>
        
    <div>
      <h3 className="App">Asian movie web</h3>

      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/all_drama" element={<AllDrama/>}/>

      </Routes>
    </div>

    </Router>
  )
};

export default App;