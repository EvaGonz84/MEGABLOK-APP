import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigNumberPage from "./pages/configNumberPage/ConfigNumberPage";
import { UserContext } from "./context/UserProvider";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UserPage from "./pages/userPage/userPage";

const App = () => {
  //Global state to access the menu
  const { registered } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          //Conditional rendering to access the homepage
          element={registered ? <ConfigNumberPage /> : <HomePage />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
