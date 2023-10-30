import './App.css';
import AppRoutes from './Routes/AppRoutes';
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
