import Login from './components/Sign/login';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Sign/register';
import Layout from './components/Layout';
function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      
      <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Layout} />
            {/* <Route path='*' component={ComponenteDePagina404} /> */}
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
