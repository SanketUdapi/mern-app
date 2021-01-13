import React from 'react';
import { GlobalStyle } from './globalstyles';
import { BrowserRouter as Router, Route, /*Link */Switch,Redirect} from "react-router-dom";
import Mainpage from './pages/mainstuff/mainstuff';

import Snackspage from './pages/snacks/snacks';
import Sweetspage from './pages/sweets/sweets'
import Allitems from './pages/allitems/allitems'
import Contact from './pages/contacts/contact';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path='/' component={Mainpage}></Route>
        <Route exact path='/sweet' component={Sweetspage}></Route>
        <Route exact path='/snack' component={Snackspage}></Route>
        <Route exact path='/allitems' component={Allitems}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path="/face" render={() => (window.location = "https://www.facebook.com/VIJAY-Bhavan-sweet-mart-288084031534978/videos/")} /> 
        <Route exact path="/address" render={() => (window.location = "https://goo.gl/maps/NLGHCTegAHQkVArM9")} /> 
        <Redirect to='/404'/>
      </Switch>
    </Router>
  );
}

export default App;
