import Login from './components/Sign/login';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Sign/register';
import Layout from './components/Layout';
import Page404 from './components/Page404';
import Profile from './components/Profile';
function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      
      <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Layout} />
            <Route path="/profile" component={Profile} />
            <Route path='*' component={Page404} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
