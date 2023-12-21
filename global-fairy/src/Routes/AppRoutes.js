import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import LayoutWithHeaderFooter from "./LayoutWithHeaderFooter";
import LayoutWithoutHeaderFooter from "./LayoutWithoutHeaderFooter";
import NotAuthorization from "../pages/NotAuthorization/NotAuthorization.js";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.js";
import loading from "../assets/icons/refresh.png";
import styles from "./AppRoutes.module.css";
const LazyAbout = React.lazy(() => import("../pages/About/About.js"));
const LazyContact = React.lazy(() => import("../pages/ContactUs/Contact.js"));
const LazyBrand = React.lazy(() => import("../pages/Brand/Brand.js"));
const LazyDashboard = React.lazy(() =>
  import("../pages/Dashboard/Dashboard.js")
);
const LazyProductView = React.lazy(() =>
  import("../pages/ProductView/ProductView.js")
);
const LazyInventory = React.lazy(() =>
  import("../pages/ShoppingCart/Inventory.js")
);
const LazySignupPage = React.lazy(() =>
  import("../pages/Signup/SignupPage.js")
);
const LazySigninPage = React.lazy(() =>
  import("../pages/Signin/SigninPage.js")
);
const LazyAddProduct = React.lazy(() =>
  import("../pages/Addproduct/Addproduct.js")
);
const LazyProductDetails = React.lazy(() =>
  import("../pages/ProductDetails/ProductDetails.js")
);
import AdminChat from "../pages/AdminChat/AdminChat";
import UserChat from "../components/UserChat/UserChat";

function AppRoutes() {
  const { user } = useContext(UserContext);
  const [authed, setAuthed] = useState("");
  const [chatAllowed, setChatAllowed] = useState("");
  useEffect(() => {
    if (user && user.Role && user.Role === "admin") {
      setAuthed(
        <React.Suspense
          fallback={
            <div className={styles.loading}>
              <img
                className={styles.imageLoading}
                src={loading}
                alt="loading"
              />
              <h1 className={styles.titleLoading}>Loading...</h1>
            </div>
          }
        >
          <LazyDashboard />
        </React.Suspense>
      );
    } else {
      setAuthed(<NotAuthorization />);
    }

    if(user.Role === "user"){
      setChatAllowed(<UserChat/>)
    } else {
      setChatAllowed("")
    }
  }, [user]);

  // console.log("authed???: ", authed.key)
  console.log("user in approutes: ", user);

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
                  {/* {typeof(user.name) =="string" ? <UserChat/> : ""} */}
                  {chatAllowed}
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/"
              element={
                <LayoutWithHeaderFooter>
                  <Home />
                  {/* {user !==null ? <UserChat/> : ""} */}
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/about"
              element={
                <LayoutWithHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyAbout />
                  </React.Suspense>
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/contact"
              element={
                <LayoutWithHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyContact />
                  </React.Suspense>
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/Products/:type/:nameType?"
              element={
                <LayoutWithHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyBrand />
                  </React.Suspense>
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/view/:productId"
              element={
                <LayoutWithHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyProductView />
                  </React.Suspense>
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/cart"
              element={
                <LayoutWithHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyInventory />
                  </React.Suspense>
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
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazySignupPage />
                  </React.Suspense>
                </LayoutWithoutHeaderFooter>
              }
            />

            <Route
            path="/dashboard/chat"
            element={
              <LayoutWithoutHeaderFooter>
                {user ? <AdminChat/> : <NotAuthorizatio/>}
                </LayoutWithoutHeaderFooter>
              }
            />

            <Route
              path="/login"
              element={
                <LayoutWithoutHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazySigninPage />
                  </React.Suspense>
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/actions/:operation"
              element={
                <LayoutWithoutHeaderFooter>
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyAddProduct />
                  </React.Suspense>
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
                  <React.Suspense
                    fallback={
                      <div className={styles.loading}>
                        <img
                          className={styles.imageLoading}
                          src={loading}
                          alt="loading"
                        />
                        <h1 className={styles.titleLoading}>Loading...</h1>
                      </div>
                    }
                  >
                    <LazyProductDetails />
                  </React.Suspense>
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
