import { Avatar } from '@material-ui/core'
import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import './post.css'

function Posts({profilePic,img,user,timestamp,msg}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__info">
                    <h3>{user}</h3>
                    <p>{new Date(timestamp.toDate()).toUTCString()}</p>
                </div>
            </div>
            
            <div className="post__bottom">
                <p>{msg}</p>
            </div>
            <div className="post__img">
                <img src={img} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <FavoriteIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <CommentIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}
//{new Date(timestamp?.toDate()).toLocaleTimeString()}
export default Posts
