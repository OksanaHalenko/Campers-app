import { Route, Routes } from "react-router-dom";
import "./App.css";

import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Loader from "../Loader/Loader";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CamperPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
