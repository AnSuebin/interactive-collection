import Home from './pages/Home';
import Speech from './pages/Speech';
import Switch from './pages/Switch';
import DandD from './pages/DandD';
import DropList from './pages/DropList';
import Carousel from './pages/Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/switch" element={<Switch />} />
          <Route path="/drag-and-drop" element={<DandD />} />
          <Route path="/drop-list" element={<DropList />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/speech" element={<Speech />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
