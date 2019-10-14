import React from 'react';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import './Styles/root.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
