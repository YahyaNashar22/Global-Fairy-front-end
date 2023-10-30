import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/ContactUs/Contact'
import Brand from '../pages/Brand/Brand'
import Category from '../pages/Category/Category'
import Dashboard from '../pages/Dashboard/Dashboard'
import AddProduct from '../pages/AddProduct/AddProduct'

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
          <Route path="/dashborad" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;