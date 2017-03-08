import React from 'react';

import NavBar from './navbar/navbar.jsx';

const App = ({ children }) => (
  <div>
    <NavBar/>
    { children }
  </div>
);

export default App;
