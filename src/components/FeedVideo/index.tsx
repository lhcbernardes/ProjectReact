import React from 'react';
import { IframeVideo } from './styles';
const FeedVideo: React.FC<LoadVideos> = ({item}:LoadVideos) => {
  return (
    <IframeVideo src={`https://www.youtube.com/embed/${item}`}
        frameBorder={0}
        allow='autoplay; encrypted-media'
        allowFullScreen={true}
        title='video'
        className='video'
        />
  );
};

export default FeedVideo;
