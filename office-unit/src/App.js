

import NavBar from './componets/NavBar';
import OfficeLay from './componets/OfficeLay';
import AddOffice from './componets/AddOffice';
import AllEmployees from './componets/AllEmployees';
import AddEmployee from './componets/AddEmployee';
import EditEmployee from './componets/EditEmployee';
import NotFound from './componets/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <p>
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/" component={OfficeLay} />
            <Route exact path="/all" component={AllEmployees} />
            <Route exact path="/add" component={AddEmployee} />
            <Route exact path="/edit/:id" component={EditEmployee} />
            <Route exact path="add1" component={AddOffice} />
            <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </p>
  );
}

export default App;
