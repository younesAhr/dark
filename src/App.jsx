import './styles/App.css'
import Nav from './components/navbar.jsx'
import Home from './components/home.jsx'
import Svc from './components/services.jsx'
import Contact from './components/contact.jsx'
import Login from './components/login.jsx'
export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <Svc />
      <Contact />
      <Login />
    </>
  );
}

