import styled from "styled-components";
import { FaWind } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 500px;
    height: 500px;
  }

  h1 {
    color: var(--color-white);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }

  h2 {
    color: var(--color-primary);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }

  p {
    color: var(--color-white);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }

  a {
    color: var(--color-secondary);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }
  
`;

export const Wave = styled(FaWind)`
  width: 50px;
  height: 50px;
  color: var(--color-hashtag);
  margin-right: 8px;
`;