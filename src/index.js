import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar.js'
import VideoList from "./components/video_list.js"

const API_KEY = 'AIzaSyC-381fmSE3G0VtkhDkXYGXmDps8Jdbfs8'


// create new component (should produce html)
class App extends Component {
   constructor(props){
      super(props)

      this.state = { videos: [] }

      YTSearch({key: API_KEY, term: "surfing"}, (videos) => {
         this.setState({videos})
      })

   }
   render () {
   return (
         <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
         </div>)
      }
}

// place above html into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
