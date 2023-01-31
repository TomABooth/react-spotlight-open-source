import { Route, Switch } from 'react-router-dom';
import './App.css';
import table from './components/Table/table.js';
import chart from './components/Chart/chart.js';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <nav>
        <Button href="/table">Table</Button>
        <Button href="/charts">Charts</Button>
      </nav>
      <Switch>
        <Route exact path="/table" component={table} />
        <Route exact path="/charts" component={chart} />
      </Switch>
    </div>
  );
}

export default App;
