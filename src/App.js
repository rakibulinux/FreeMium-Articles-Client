import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { APIContext } from "./contexts/APIProvider";
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
    </div>
  );
}

export default App;
