import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import table from './components/Table/table.js';
import chart from './components/Chart/chart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={table} />
        <Route path="/charts" component={chart} />
      </Switch>
    </div>
  );
}

export default App;
