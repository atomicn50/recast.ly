// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appReference: this,
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search/> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em></em> <VideoPlayer video={this.state.currentVideo} appState={this.state}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em></em> <VideoList videos={this.state.allVideos} appState={this.state}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
    
}

window.App = App;




//videoList

//videolistEntry

//videoPlayer

//searchYoutube

//search