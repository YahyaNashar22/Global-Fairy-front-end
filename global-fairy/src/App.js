import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { CartProvider } from "./context/ShoppingContext.js";
axios.defaults.withCredentials = true;

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
