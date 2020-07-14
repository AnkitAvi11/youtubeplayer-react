import React from 'react';

const videoItem = (props) => {
    console.log(props.details)
    return (
        <div className="card" style={{width:"100%", cursor:"pointer"}}>
            <img src={props.details.snippet.thumbnails.default.url} className="card-img-top" alt={props.details.description} />
            <div className="card-body">
                <p className="card-text">{props.details.snippet.description}</p>
            </div>
        </div>
    )
}

export default videoItem;