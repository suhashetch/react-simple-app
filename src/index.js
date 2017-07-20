import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyC8zQGd_czFA7gUy-eEbw0-QuPDl2YJd9Q';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.onVideoSearch('surfing');
  }

  onVideoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      /*
      We're saving the list of videos we get (in the response) to the
      state object of the App component
      */
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
      /*
      NOTE: The above gets resolved to this.setState( {videos: videos} )
      This is some ES6 magic which can be used if the key and the value
      of an object have the same name
      */
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.onVideoSearch(term)} />

        {/*
          NOTE:
          Below is an example of passing data to other components
          Data so passed are called props for that component
          */}
        <VideoDetail video={this.state.selectedVideo} />

        {/*
          NOTE:
          onVideoSelect is a function which is being passed as a prop
          to the VideoList component.
          This function needs to be called from some child component
          with one parameter - the selected video
          */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

/*
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
*/

ReactDOM.render(<App />, document.querySelector('.container'));
