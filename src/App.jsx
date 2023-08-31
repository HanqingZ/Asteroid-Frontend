import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Miners from './pages/Miners'
import Asteroids from './pages/Asteroids'
import Planets from './pages/Planets'
import './App.scss';
import Header from './components/Header';
import ButtonSection from './components/ButtonSection';

function App() {
  return (
    <div className="App">
      <Header />
      <ButtonSection />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/miners' element={<Miners />} />
        <Route path='/asteroids' element={<Asteroids />} />
        <Route path='/planets' element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
