import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';
import ProfileExtends from './ProfileExtends';

const LeftColumn: React.FC<LoadingProps> = ({ isExtends, isLoading  }: LoadingProps) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          {isExtends ? (<ProfileExtends/>): (<ProfilePanel />)}

          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
