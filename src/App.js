import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import Contact from './containers/contact';
import Projects from './containers/projects';
import Navbar from './components/navBar';
import ReactGA from 'react-ga';

ReactGA.initialize('G-PYCENQ57V2');
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/portfolio-front-end' element={<Home />} />
          <Route path='/portfolio-front-end/projects' element={<Projects />} />
          <Route path='/portfolio-front-end/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
