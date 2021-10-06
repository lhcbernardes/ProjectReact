import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Router>
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <Link to="/">Início</Link>
            </button>
            <button>
              <NotificationsIcon />
              <Link to="/notifications">Notificações</Link>
            </button>
            <button>
              <ProfileCircle src="https://github.com/lhcbernardes.png" />
              <Link to="/profile"> 
              <span>
                Eu <CaretDownIcon />
              </span>
              </Link>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
    <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
    </Router>
  );
};

export default Header;
