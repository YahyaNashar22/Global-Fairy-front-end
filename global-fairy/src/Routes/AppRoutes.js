import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/ContactUs/Contact";
import Brand from "../pages/Brand/Brand";
import Dashboard from "../pages/Dashboard/Dashboard";
import Addproduct from "../pages/Addproduct/Addproduct";
import ProductView from "../pages/ProductView/ProductView";
import NotFound from "../pages/NotFound/NotFound";
import LayoutWithHeaderFooter from "./LayoutWithHeaderFooter";
import LayoutWithoutHeaderFooter from "./LayoutWithoutHeaderFooter";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SignupPage from "../pages/Signup/SignupPage";
import SigninPage from "../pages/Signin/SigninPage";
import Inventory from "../pages/ShoppingCart/Inventory.js";
import NotAuthorization from "../pages/NotAuthorization/NotAuthorization.js";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.js";

function AppRoutes() {
  const { user } = useContext(UserContext);
  const [authed, setAuthed] = useState("");
  useEffect(() => {
    if (user && user.Role && user.Role === "admin") {
      setAuthed(<Dashboard />);
    } else {
      setAuthed(<NotAuthorization />);
    }
  }, [user]);

  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            {/* Routes with Header and Footer */}
            <Route
              index
              element={
                <LayoutWithHeaderFooter>
                  <Home />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/"
              element={
                <LayoutWithHeaderFooter>
                  <Home />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/about"
              element={
                <LayoutWithHeaderFooter>
                  <About />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/contact"
              element={
                <LayoutWithHeaderFooter>
                  <Contact />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/Products/:type/:nameType?"
              element={
                <LayoutWithHeaderFooter>
                  <Brand />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/view/:productId"
              element={
                <LayoutWithHeaderFooter>
                  <ProductView />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/cart"
              element={
                <LayoutWithHeaderFooter>
                  <Inventory />
                </LayoutWithHeaderFooter>
              }
            />

            {/* Routes without Header and Footer */}
            <Route
              path="/dashboard"
              element={
                <LayoutWithoutHeaderFooter>{authed}</LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/signup"
              element={
                <LayoutWithoutHeaderFooter>
                  <SignupPage />
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/login"
              element={
                <LayoutWithoutHeaderFooter>
                  <SigninPage />
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/actions/:operation"
              element={
                <LayoutWithoutHeaderFooter>
                  <Addproduct />
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/*"
              element={
                <LayoutWithoutHeaderFooter>
                  <NotFound />
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="products/:productID"
              element={
                <LayoutWithoutHeaderFooter>
                  <ProductDetails />
                </LayoutWithoutHeaderFooter>
              }
            />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
