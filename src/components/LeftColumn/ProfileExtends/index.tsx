import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC<LoadingProps> = ({ data, isLoading  }: LoadingProps) => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover">
        <img
          src="https://github.com/lhcbernardes.png"
          alt="Avatar"
          className="profile-picture"
        />
        </div>
        
        <h1>{data.username}</h1>
        <h2>{data.email}</h2>

        <div className="separator"></div>

        <div className="key-value">
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
        </div>
        <div className="separator"></div>
        <div className="key-value">
          <span className="key">Descrição aleatoriaa</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
