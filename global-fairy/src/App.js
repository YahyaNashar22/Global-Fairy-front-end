import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { CartProvider } from "./context/ShoppingContext.js";
import { UserContext, UserProvider } from "./context/UserContext.js";
import { useContext, useEffect } from "react";
axios.defaults.withCredentials = true;

function App() {
  const { user, setUser } = useContext(UserContext);
  async function getUserDAta() {
    try {
      if (Object.keys(user).length < 1) {
        const userData = await axios.get(
          `${process.env.REACT_APP_PATH}/user/getone`
        );
        if (userData) {
          setUser(userData.data);
          console.log(user);
        } else {
          console.log("no data");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDAta();
  }, [user]);
  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
