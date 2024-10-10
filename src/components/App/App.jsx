import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CamperPage from "../../pages/CamperPage/CamperPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CatalogPage />} />
          <Route path="/campers/:id" element={<CamperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
