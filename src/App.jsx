import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BrandPage from "./BrandPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:brandName" element={<BrandPage />} />
      </Routes>
    </>
  );
};

export default App;
