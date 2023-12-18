import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";

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
      <AppRoutes />
    </div>
  );
}

export default App;
