// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: window.onLoadVideos,
      currentVideo: window.onLoadVideos[0],
      options: {
        key: YOUTUBE_API_KEY,
        query: '',
        max: 5
      }
    }; 
  }

  componentDidMount() {
    this.props.searchYouTube(this.state.options, this.updateVideoState.bind(this));
  }

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleSearchBarChange(event) {
    this.props.searchYouTube(this.state.options, this.updateVideoState.bind(this));
    this.setState({
      options.query: event.target.value
    });
  }

  updateVideoState(data) {
    this.setState({
      allVideos: data,
      currentVideo: data[0]
    });
  }

  handleSearchBarSubmit() {
    this.props.searchYouTube(this.state.options, this.updateVideoState.bind(this));
  }

  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search value={this.state.searchBarValue} clickFunction={this.handleSearchBarSubmit.bind(this)} 
          changeFunction={this.handleSearchBarChange.bind(this)} /> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em></em> <VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em></em> <VideoList videos={this.state.allVideos} clickFunction={this.handleVideoClick.bind(this)}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
    
}

window.App = App;

