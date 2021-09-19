// Dependencies
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import AddColor from './Pages/AddColor/addColor';
import Visualize from './Pages/visualize/visualize';
// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={AddColor} />
          <Route path="/visualize" exact component={Visualize} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
