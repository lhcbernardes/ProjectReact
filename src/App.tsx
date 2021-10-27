import Login from './components/Sign/login';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Sign/register';
import Layout from './components/Layout';
import Page404 from './components/Page404';
import Profile from './components/Profile';
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';
function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data: any) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Switch>
            <Route path={["/", "/login"]} exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Layout} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path='*' component={Page404} />
          </Switch>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
