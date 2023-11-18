import {StrictMode} from "react";
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux";
import ChessApp from "./ChessApp";
import store from "./store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <Provider store={store}>
    <ChessApp />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();