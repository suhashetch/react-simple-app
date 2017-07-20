import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; Can be replaced by {video} in the params
  // {video, onVideoSelect} means access the video and onVideoSelect
  // property of the object which is being passed to this function

  // console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
