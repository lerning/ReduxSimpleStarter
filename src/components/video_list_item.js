import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
   //vvv this is same as above interpolation vvv
   // const video = props.video
   // const onVideoSelect = props.onVideoSelect
   let imageUrl = video.snippet.thumbnails.default.url
   let title = video.snippet.title
   // console.log(video);
   return (
   <li onClick= {() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">

         <div className="media-left">
            <img className="media-object" src={imageUrl} />
         </div>

         <div className="media-body">
            <div className="media-heading">{title}</div>
         </div>
      </div>
   </li>
   )
}

export default VideoListItem
