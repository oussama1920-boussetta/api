import Users from "./component/Users";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
<Switch>
<Route exact path='/' component={Users}/>


</Switch>
    </div>
  );
}

export default App;
