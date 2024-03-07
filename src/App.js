import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;