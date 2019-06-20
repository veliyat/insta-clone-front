import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/shared/Header/Header.jsx'
import Nav from './components/shared/Nav/Nav.jsx'
import Footer from './components/shared/Footer/Footer.jsx'
import Picstagram from './components/Picstagram/Picstagram.jsx'
import Login from './components/Login/Login.jsx';
import Logout from './components/Logout/Logout.jsx';
import Register from './components/Register/Register.jsx';
import PageNotFound from './components/shared/PageNotFound/PageNotFound'

function App() {
  return (
    <Fragment>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="offset-md-1 col-md-10">
            <Switch>
              <Route path='/' exact={true} render={() => {
                return <Redirect to="/login" />
              }} />
              <Route path='/logout' component={Logout} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route component={Picstagram} />
              <Route path='**' component={PageNotFound} />
            </Switch>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Footer />      
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
