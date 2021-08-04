import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "VFIoaRQ0cpwDcaOOad"
    }

    this.search("Arsenal");
  }

  search = (query) => {
    // call giphy api
    giphy('ANV7FDyckh8DvnBAP3e8oYfglhUBMC2K').search({
      q: query,
        rating: 'g',
        limit: 10
    }, (error, result) => {
        this.setState({
          gifs: result.data
        });
    });

  }

  render () {
    // const gifs = [
    //   { id: "VFIoaRQ0cpwDcaOOad" },
    //   { id: "1YfQFPkcZnaZOCF6ZX" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
