import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigNumberPage from "./pages/configNumberPage/ConfigNumberPage";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UserPage from "./pages/userPage/userPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConfigNumberPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
