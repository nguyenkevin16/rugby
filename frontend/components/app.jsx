import React from 'react';

import NavBar from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';

const App = ({ children }) => (
  <div>
    <NavBar/>
    { children }
    <Footer/>
  </div>
);

export default App;
