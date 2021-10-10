import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wave } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
    <div className=""><h1>Whoops!</h1></div>
    <div className=""><h2>Erro 404, pagina não encontrada!</h2></div>
    <img src={'https://media.giphy.com/media/SqZXXlUtp1uIJBMPiH/giphy-downsized-large.gif'} alt="loading..." />
      <h2>Essa pagina entrou de ferias! <Wave/></h2>
      <p>Volte para a&nbsp;<Link to="/dashboard">Pagina Principal</Link></p>
    </Container>
  );
};

export default TrendingPanel;
