import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Blogs from "./Pages/Blogs";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import MoreInfoMovies from "./Pages/MoreInfoMovies";
import MoreInfoBooks from "./Pages/MoreInfoBooks";

function App() {
  return (
    <Router>
      <nav className="navbar" id="main-menu">
        <img
          className="logo"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1280px-Harry_Potter_wordmark.svg.png"
        />
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>

      <input type="checkbox" id="hamburger-input" class="burger-shower" />
      <label id="hamburger-menu" for="hamburger-input">
        <nav id="sidebar-menu">
          <img
            className="logo"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1280px-Harry_Potter_wordmark.svg.png"
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      </label>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/moreinfomovies/:id" element={<MoreInfoMovies/>} />
        <Route path="/moreinfobooks/:id" element={<MoreInfoBooks/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
      <div></div>
    </Router>
  );
}

export default App;
