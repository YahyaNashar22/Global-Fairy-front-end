import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from '../context/DataContext';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/ContactUs/Contact';
import Brand from '../pages/Brand/Brand';
import Dashboard from '../pages/Dashboard/Dashboard';
import Addproduct from '../pages/Addproduct/Addproduct';
import ProductView from '../pages/ProductView/ProductView';
import NotFound from '../pages/NotFound/NotFound';
import LayoutWithHeaderFooter from './LayoutWithHeaderFooter';
import LayoutWithoutHeaderFooter from './LayoutWithoutHeaderFooter';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
// import NotAuthorization from '../pages/NotAuthorization/NotAuthorization'
import NetworkError from '../pages/NetworkError/NetworkError'

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <DataProvider>
        <Routes>
    
        {/* Routes with Header and Footer */}
        <Route index element={<LayoutWithHeaderFooter> <Home /> </LayoutWithHeaderFooter>} />
        <Route path="/" element={<LayoutWithHeaderFooter> <Home /> </LayoutWithHeaderFooter>} />
        <Route path="/about" element={<LayoutWithHeaderFooter> <About /> </LayoutWithHeaderFooter>} />
        <Route path="/contact" element={<LayoutWithHeaderFooter> <Contact /> </LayoutWithHeaderFooter>} />
        <Route path="/Products/:type/:nameType?" element={<LayoutWithHeaderFooter> <Brand /> </LayoutWithHeaderFooter>} />
        <Route path="/view/:productId" element={<LayoutWithHeaderFooter> <ProductView /> </LayoutWithHeaderFooter>} />

          {/* Routes without Header and Footer */}
          <Route path="/dashboard" element={<LayoutWithoutHeaderFooter> <Dashboard /> </LayoutWithoutHeaderFooter>} />
          <Route path="/actions/:operation" element={<LayoutWithoutHeaderFooter> <Addproduct /> </LayoutWithoutHeaderFooter>} />
          <Route path="/*" element={<LayoutWithoutHeaderFooter> <NotFound /> </LayoutWithoutHeaderFooter>} />
          <Route path="products/:productID" element={<LayoutWithoutHeaderFooter> <ProductDetails/> </LayoutWithoutHeaderFooter>} />
          <Route path="/b" element={<LayoutWithoutHeaderFooter><NetworkError/></LayoutWithoutHeaderFooter>}/>
        </Routes>
      </DataProvider>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes;
