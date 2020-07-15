import React from 'react';

const videoItem = (props) => {
    return (
        <div className="card" style={{width:"100%", cursor:"pointer"}}>
            <img src={props.details.snippet.thumbnails.default.url} className="card-img-top" alt={props.details.description} />
            <div className="card-body">
                <p className="card-text" style={{fontSize: "12px"}}>{props.details.snippet.description}</p>
            </div>
        </div>
    )
}

export default videoItem;