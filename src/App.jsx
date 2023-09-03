import { Routes, Route } from 'react-router-dom';
import Map from './pages/Map'
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
      <div className="DetailPage" >
        <ButtonSection />
        <Routes>
          <Route path='/' element={<Miners />} />
          <Route path='/miners' element={<Miners />} />
          <Route path='/asteroids' element={<Asteroids />} />
          <Route path='/planets' element={<Planets />} />
        </Routes>
      </div>
      <div className="MapSide" >
        <Map />
      </div>
    </div>
  );
}

export default App;
