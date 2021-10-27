import React, { useEffect, useState } from 'react';
import { getUserBoard } from '../../services/user.service';
import AdBanner from '../AdBanner';
import DesktopHeader from '../DesktopHeader';
import FeedVideo from '../FeedVideo';
import LeftColumn from '../LeftColumn';
import FeedPost from '../MiddleColumn/FeedPost';
import MobileHeader from '../MobileHeader';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import { Container, FeedBackground, Middle} from './styles';

const Profile: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({})
    const videos = ['fMs_n9G_TfI', 'E7wJTI-1dvQ', 'jtVSAY1vL14', 'sRXnJYeGGFU', 'developer'];
    useEffect(() => {
      getUserBoard().then((result) => {
        if (result.status === 200) {
          setData (result.data.account);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }).catch(e => {
        setLoading(false);
      });
    }, []);
    
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} data={data}/>
        <Middle>
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
        <FeedBackground>
        {videos.map((item) => (
            <FeedVideo item={item}/>
        ))}
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </FeedBackground>
        </>
      )}
    </Middle>

      </main>
    </Container>
  );
}

export default Profile;