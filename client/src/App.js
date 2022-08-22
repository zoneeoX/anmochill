import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./misc/Navbar";
import TrendingPage from "./page/TrendingPage";
import UpcomingPage from "./page/UpcomingPage";
import Anime from "./pages/Anime";
import Error from "./pages/Error";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trending from "./pages/Trending";

function App() {
  const routePath = [
    {
      name: "Home",
      path: "/",
      to: (
        <>
          <Hero /> <Trending />
        </>
      ),
    },
    { name: "watchlist", path: "/watchlist" },
    { name: "upcoming", path: "/anime/upcoming", to: <UpcomingPage /> },
    { name: "trending", path: "/anime/trending", to: <TrendingPage /> },
    { name: "anime", path: "/anime/:type/:id/:title", to: <Anime /> },
    { name: "register", path: "/register", to: <Register /> },
    { name: "login", path: "/login", to: <Login />},
    { name: "error", path: "*", to: <Error /> },
  ];

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  
  


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {routePath.map((element, i) => (
            <Route path={element.path} element={element.to} key={i} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
