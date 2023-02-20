import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { APIContext } from "./contexts/APIProvider";
import router from "./Routers/Routers";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

const TRACKING_ID = process.env.REACT_APP_MEASUREMENT_ID;

function App() {
  const { isDarkMode } = useContext(APIContext);
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Provider store={store}>
      <div
        className={
          isDarkMode
            ? "min-h-screen bg-black-350 text-white"
            : "bg-base-100 text-black-350"
        }
      >
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
