import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./ChessApp.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PlayNowScreen from "./screens/PlayNowScreen/PlayNowScreen";
import PlayOnlineScreen from "./screens/PlayOnlineScreen/PlayOnlineScreen";
// import { Outlet } from "react-router-dom";

function ChessApp() {
  const ranks = 8;
  const files = 8;
  const engineOptions = ["stockfish", "komodo"];

  const resizeObserver = new ResizeObserver((entries) => {
    const element = entries[0].contentRect;
    const root = document.documentElement;
    const chessApp = document.querySelector(".chess-app");
    const orientation =
      element.width / element.height < 900 / 654 ? "portrait" : "landscape";
    const edgeLength =
      element.width <= element.height
        ? element.width * 0.985
        : orientation === "portrait"
        ? element.width * 0.82
        : element.height * 0.88;

    chessApp.classList.remove("portrait", "landscape");
    chessApp.classList.add(orientation);

    root.style.setProperty("--board-width", Math.floor(edgeLength) + "px");
    root.style.setProperty("--board-height", Math.floor(edgeLength) + "px");
  });

  // function ChessApp() {
  //   // We will use the Route component to specify each route
  //   return (
  //     <div className="ChessApp">
  //     <Outlet/>
  //     </div>
  //   );
  // }

  return (
    <Router>
      <div className="chess-app">
        <Navigate>
          <Route exact path="/">
            <HomeScreen resizeObserver={resizeObserver} />
          </Route>

          <Route exact path="/play-now">
            <PlayNowScreen
              ranks={ranks}
              files={files}
              engineOptions={engineOptions}
              resizeObserver={resizeObserver}
            />
          </Route>

          <Route exact path="/play-online">
            <PlayOnlineScreen
              ranks={ranks}
              files={files}
              resizeObserver={resizeObserver}
            />
          </Route>

          <Routes from="*" to="/" />
        </Navigate>
      </div>
    </Router>
  );

}

export default ChessApp;