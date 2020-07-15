import React from 'react';

class Player extends React.Component {
    render() {
        if (!this.props.video) {
            return (
                <div>Loading ... </div>
            )
        }

        let videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div>
                <iframe style={{width:"100%"}} height="400px" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div style={{padding : "20px 0px"}}>
                    {this.props.video.snippet.description}
                </div>
            </div>
            
        )
    }
}

export default Player;