import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./misc/Navbar";
import TrendingPage from "./page/TrendingPage";
import UpcomingPage from "./page/UpcomingPage";
import AdvancedSearch from "./pages/AdvancedSearch";
import Anime from "./pages/Anime";
import Error from "./pages/Error";
import Hero from "./pages/Hero";
import Library from "./pages/Library";
import Login from "./pages/Login";
import ProfileOverlay from "./pages/ProfileOverlay";
import Register from "./pages/Register";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings"

/**
 * TODO: Optimize fetch (in 1 component)
 */

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
    { name: "upcoming", path: "/anime/Upcoming", to: <UpcomingPage /> },
    { name: "trending", path: "/anime/Trending", to: <TrendingPage /> },
    { name: "anime", path: "/anime/:id/:title", to: <Anime /> },
    { name: "register", path: "/register", to: <Register /> },
    { name: "login", path: "/login", to: <Login /> },
    { name: "library", path: "/library", to: <Library /> },
    { name: "advanced", path: "/anime/advancedsearch", to: <AdvancedSearch /> },
    { name: 'Profile', path:"/profile/:username", to: <ProfileOverlay /> },
    { name: 'settings', path:"/settings", to: <Settings /> },
    { name: "error", path: "*", to: <Error /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
