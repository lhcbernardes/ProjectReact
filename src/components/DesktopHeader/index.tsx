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
  Link
} from "react-router-dom";
import { useAuth } from "../../context/auth";
const Header: React.FC = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }
  return (
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
              <Link to="/dashboard">Início</Link>
            </button>
            <button>
              <NotificationsIcon />
              <Link to="/notifications">Notificações</Link>
            </button>
            <button onClick={logOut}>
              <NotificationsIcon />
              <span >Log out</span>
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
  );
};

export default Header;
