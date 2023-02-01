import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { APIContext } from "./contexts/APIProvider";
import router from "./Routers/Routers";

function App() {
  const { isDarkMode } = useContext(APIContext);

  return (
    <div
      className={`bg-${isDarkMode ? "black-900" : "gray-100"} text-${
        isDarkMode ? "white" : "black"
      }`}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
