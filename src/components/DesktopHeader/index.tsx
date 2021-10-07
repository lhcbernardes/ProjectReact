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

const Header: React.FC = () => {
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
  );
};

export default Header;
