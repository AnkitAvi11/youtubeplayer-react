import React, {Component} from 'react';

import Search from './components/Search';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import Player from "./components/Player";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        }
    }

    onTermSubmit = (term) => {
        console.log(term)
        const KEY = "AIzaSyCrF3BE2Lu3ZWe_d9SfHd67mKNrAEmLTTg";
        youtube.get('/search', {
            params : {
                part : "snippet",
                maxResults : 10,
                key : KEY,
                q :  term
            }
        }).then(response => {
            this.setState({
                videos : response.data.items
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        const KEY = "AIzaSyCrF3BE2Lu3ZWe_d9SfHd67mKNrAEmLTTg";
        youtube.get('/search', {
            params : {
                part : "snippet",
                maxResults : 10,
                key : KEY,
                q :  "toys"
            }
        }).then(response => {
            this.setState({
                videos : response.data.items,
                selectedVideo : response.data.items[0]
            })
        })
        .catch(err => console.log(err))
    }

    onvideoSelect = (video) => {
        this.setState({
            selectedVideo : video
        })
    }

    render() {
        return (
            <div>
                <Search 
                    onformsubmit = {this.onTermSubmit}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <Player video={this.state.selectedVideo} />
                        </div>
                        <div className="col-sm-4">
                            <VideoList videos={this.state.videos} onvideoSelect={this.onvideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;