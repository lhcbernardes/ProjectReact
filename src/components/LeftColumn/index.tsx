import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';
import ProfileExtends from './ProfileExtends';

const LeftColumn: React.FC<LoadingProps> = ({ data, isLoading  }: LoadingProps) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          {data ? (<ProfileExtends data={data}/>): (<ProfilePanel />)}

          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
