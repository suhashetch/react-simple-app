import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // NOTE: props is being passed down from the parent component
  // i.e., the App component

  const videoItems = props.videos.map((video) => {
    return (
      /*The onVideoSelect method is being passed down further*/
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {/*React automatically iterates through arrays/lists to fill
        up some ul elements*/}
      {videoItems}
    </ul>
  );
}

export default VideoList;
