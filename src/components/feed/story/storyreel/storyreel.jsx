import React from 'react';
import {Avatar} from '@material-ui/core'
import './storyreel.css'

function StoryReel({ img,profileSrc,title }) {
    return (
        <div style={{backgroundImage:`url(${img})`}} className="story__reel">
            <Avatar src={profileSrc} className="avatar"/>
            <h4>{title}</h4>
        </div>
    )
}

export default StoryReel
