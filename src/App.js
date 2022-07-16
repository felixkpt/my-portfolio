import './App.scss';

import Navbar from './components/navBar'
import Footer from './components/footer';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useContext, useLayoutEffect } from 'react';

import Home from './containers/home';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import { ThemeContext } from './context'
import axios from 'axios';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {

  const theme = useContext(ThemeContext)
  const isDarkMode = theme.state.darkMode

  if (isDarkMode === true) {
    const rules = async () => {
      const resp = await axios.get('/resources/dark-theme.json')
      if (resp.status === 200) {
        const res = await resp.data
        res.map(property => document.documentElement.style.setProperty(property.name, property.value))
      }
    }
    rules()
  } else {
    const rules = async () => {
      const resp = await axios.get('/resources/light-theme.json')
      if (resp.status === 200) {
        const res = await resp.data
        res.map(property => document.documentElement.style.setProperty(property.name, property.value)
        )
      }
    }
    rules()
  }

  return (
    <div className="App">
       <Navbar />
      { /** main page content */}
      <div className='App__main-page-content'>
        <Wrapper>
          <Routes>
            <Route exact index path='/' element={<Home />} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/skills' element={<Skills />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
