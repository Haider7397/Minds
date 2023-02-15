import './App.css';
import MainPage from './pages/MainPage';
import InfoPage from './pages/InfoPage'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
