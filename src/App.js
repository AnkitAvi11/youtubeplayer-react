import React, {Component} from 'react';

import Search from './components/Search';
import youtube from './apis/youtube';
import VideoList from './components/VideoList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : []
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

    render() {
        return (
            <div>
                <Search 
                    onformsubmit = {this.onTermSubmit}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                        </div>
                        <div className="col-sm-4">
                            <VideoList videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;