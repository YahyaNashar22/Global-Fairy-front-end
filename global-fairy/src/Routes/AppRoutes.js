import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import './App.css';

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashborad" element={<Dashborad />} />
          <Route path="/addproduct" element={<Addproduct />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;