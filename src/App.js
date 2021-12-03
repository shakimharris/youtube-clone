import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Recommended from './Recommended';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/search/:searchterm" element={<Search />} />
           </Routes>
             </Router>
          </div>
  );
}

export default App;
