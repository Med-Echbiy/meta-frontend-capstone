import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home";
import ReservationPage from "./components/pages/reservation";
import OrderOnlinePage from "./components/pages/order-online";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservations' element={<ReservationPage />} />
        <Route path='/order' element={<OrderOnlinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
