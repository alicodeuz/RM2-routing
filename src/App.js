import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import UserDetails from './pages/UsersDetails';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <ul>
          <li><NavLink style={({ isActive }) => isActive ? { color: 'red' } : {}} className={({ isActive }) => isActive ? 'nav-active' : ''} to="/home">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/about">About</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/contact">contact</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/users">Users</NavLink></li>
        </ul>
      </header>
      <Routes>
        <Route path="home" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
