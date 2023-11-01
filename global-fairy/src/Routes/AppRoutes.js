import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/ContactUs/Contact';
import Brand from '../pages/Brand/Brand';
import Category from '../pages/Category/Category';
import Dashboard from '../pages/Dashboard/Dashboard';
import Addproduct from '../pages/Addproduct/Addproduct';
import LayoutWithHeaderFooter from './LayoutWithHeaderFooter';
import LayoutWithoutHeaderFooter from './LayoutWithoutHeaderFooter';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route index element={<LayoutWithHeaderFooter> <Home /> </LayoutWithHeaderFooter>} />
        <Route path="/home" element={<LayoutWithHeaderFooter> <Home /> </LayoutWithHeaderFooter>} />
        <Route path="/about" element={<LayoutWithHeaderFooter> <About /> </LayoutWithHeaderFooter>} />
        <Route path="/contact" element={<LayoutWithHeaderFooter> <Contact /> </LayoutWithHeaderFooter>} />
        <Route path="/Products/:type/:name" element={<LayoutWithHeaderFooter> <Brand /> </LayoutWithHeaderFooter>} />
        <Route path="/category" element={<LayoutWithHeaderFooter> <Category /> </LayoutWithHeaderFooter>} />
        {/* <Route path="/view" element={<LayoutWithHeaderFooter> <ProductView /> </LayoutWithHeaderFooter>} /> */}


        {/* Routes without Header and Footer */}
        <Route path="/dashboard" element={<LayoutWithoutHeaderFooter> <Dashboard /> </LayoutWithoutHeaderFooter>} />
        <Route path="/addproduct" element={<LayoutWithoutHeaderFooter> <Addproduct /> </LayoutWithoutHeaderFooter>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
