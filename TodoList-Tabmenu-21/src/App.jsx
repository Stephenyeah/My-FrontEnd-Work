// App.jsx

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';



function App() {
    return (
      <div className="App">
        <Tabs className="Tabs">
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Todos" component={Link} to="/todo" />
        </Tabs>
        <Outlet />
      </div>
    );
  }

export default App;
