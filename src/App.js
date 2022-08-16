import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./misc/Navbar";
import TrendingPage from "./page/TrendingPage";
import Hero from "./pages/Hero";
import Trending from "./pages/Trending";

function App() {
  const routePath = [
    { name: "Home", path: "/", to: <> <Hero /> <Trending /> </>  },
    { name: "watchlist", path: "/watchlist" },
    { name: "upcoming", path: "/upcoming" },
    { name: "trending", path: "/trending", to: <TrendingPage />},
  ];

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
