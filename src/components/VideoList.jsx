var VideoList = (props) => (

  //let videos = this.props.videos;
  <div className="video-list">
    {props.videos.map((video, key) => 
      <VideoListEntry video={video} key={key} />
    )}
  </div>
//props.videos = [vid1, vid2, vid3]
  
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

  //   <div><h5><em></em> <VideoListEntry video={props.videos[0]}/> </h5></div>
  //   <div><h5><em></em> <VideoListEntry video={props.videos[1]}/> </h5></div>
  //   <div><h5><em></em> <VideoListEntry video={props.videos[2]}/> </h5></div>
  //   <div><h5><em></em> <VideoListEntry video={props.videos[3]}/> </h5></div>
  //   <div><h5><em></em> <VideoListEntry video={props.videos[4]}/> </h5></div>
  // </div>