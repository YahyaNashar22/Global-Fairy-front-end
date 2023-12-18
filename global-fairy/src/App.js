import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import axios from "axios";
axios.defaults.withCredentials = true;
import { CartProvider } from "./context/ShoppingContext.js";

function App() {
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
