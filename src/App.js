import './App.css';
import MainPage from './pages/MainPage';
import InfoPage from './pages/InfoPage'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AdnanPage from './pages/AdnanPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/info" element={<AdnanPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
