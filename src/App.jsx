import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/Nav/NavBar';

// Pages
import PeoplePage from './Pages/PeoplePage';
import StarshipsPage from './Pages/StarshipPage';
import PlanetsPage from './Pages/PlanetPage';


function App() {
  // Set up our routes & route components
  // create 3 pages components to use with the routes
  // // people, starships, planets
  // Create a nav bar to navigate between pages


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/people' element={<PeoplePage />} />
        <Route path='/starships' element={<StarshipsPage />} />
        <Route path='/planets' element={<PlanetsPage />} />
      </Routes>
    </>
  );
}

export default App;
