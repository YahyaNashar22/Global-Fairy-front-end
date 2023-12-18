import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { CartProvider } from './context/ShoppingContext.js';

function App() {
  return (
    <div className="app">
      
      <CartProvider>
        <AppRoutes /> 
      </CartProvider>
    </div>
  );
}

export default App;
