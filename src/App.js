import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
       <Switch>
         <Route path="/">
         <div className="app__page">
          <Sidebar />
           <Recommended />
           </div>
          </Route>
         <Route path="/search">
           <h1>This is the search page.</h1>
           </Route>
           </Switch>
           </Router>
           </div>
  );
}

export default App;
