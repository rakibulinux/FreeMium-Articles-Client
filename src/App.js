import { useContext } from "react";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import { APIContext } from "./contexts/APIProvider";
import ArticlesDetails from "./Pages/ArticlesSection/ArticlesDetails/ArticlesDetails";
import router from "./Routers/Routers";

function App() {
  const { isDarkMode } = useContext(APIContext);

  return (
    <div
      className={
        isDarkMode ? "bg-black-350 text-white" : "bg-base-100 text-black-350"
      }
    >
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Route path="/stories" exact component={Stories} />
        <Route path="/view-story/:storyId" component={ArticlesDetails} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
