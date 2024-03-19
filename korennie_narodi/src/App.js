import './i18n';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/Home/Home";
import Peoples from './components/Peoples/Peoples'
import Interviews from './components/Interviews/Interviews';
import Nature from './components/Nature/Nature';
import Problems from './components/Problems/Problems';
import Help from './components/Help/Help';
import AboutUs from './components/About_us/AboutUs';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/help" element={<Help />} />
          {/*  дополнительные маршруты здесь */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
