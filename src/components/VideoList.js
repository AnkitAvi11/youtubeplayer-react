import React from 'react';

import VideoItem from './VideoItem';

class VideoList extends React.Component {

    render () {

        const videos = this.props.videos.map((video, index) => {
            return (
                <VideoItem details={video} key={index}/>
            )
        })

        return (
            <div className="container">
                <b>Results</b>
                <p>We have got {this.props.videos.length} videos</p>
                {videos}
            </div>
        )
    }
}

export default VideoList;