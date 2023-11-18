import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import PlayNowScreen from "./screens/PlayNowScreen/PlayNowScreen"
import PlayOnlineScreen from "./screens/PlayOnlineScreen/PlayOnlineScreen"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h1>Hello World</h1>}>

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

            
            
        </Route>
    )
)


export default router 