import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import Footer from './Footer';
import * as ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
function App() {

  const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=f793619d';

  const [movies, setmovies] = useState([]);
  useEffect(() => {
    fetchmovies();
  }, []);

  function fetchmovies() {

    fetch(`${API_URL}&s=random`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          setmovies(data.Search);
        }
      })
  }

  function queryfetchmovies(query) {

    fetch(`${API_URL}&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          setmovies(data.Search);
        }
      })
  }

  const search = () => {
    let str = document.getElementById('search').value;
    console.log("search query" + str);
    if (str == "") {
      fetchmovies();
    }
    else {
      queryfetchmovies(str);
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="search-container">
        <input type="search" name="" id="search" onKeyUp={search} placeholder="Search Here....." />
      </div>
      {/* <h2>Movies Mega World</h2> */}
      
      <div className="Moviescontainer">
        {movies.length > 0 ? (
          movies.map((item) => (
            <MovieCard movie={item} />
          )
          )
        ) : (
          <>
          <p>Loading.......</p>
          <div>
            <div>loader</div>
          </div>
          </>
        )}
      </div>
        {/* </Router> */}
        <br />
        <Footer/>
    </>
  );
}

export default App;

