import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import './msg.css'
import { useStateValue } from '../../../stateProvider';
import db from '../../../firebase';
import firebase from 'firebase';


function Msg() {
    const [input,setInput]=useState('');
    const [img,setImg]=useState('');
    const [{user},dispatch] = useStateValue();

    function handleSubmit(ev){
        ev.preventDefault();

        //db stuff
        db.collection('posts').add({
            msg:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            user:user.displayName,
            img:img,
        })

        setInput("")
        setImg("")
    }

    return (
        <div className="msg">
            <div className="msg_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder={`whats on your mind? ${user.displayName}`}
                    className="msgSend_ip"/>
                    <input 
                    value={img}
                    onChange={(e)=>setImg(e.target.value)}
                    placeholder="image URL (optional)"
                    className="msgSend_img"
                    />
                    <button onClick={handleSubmit} type="submit">
                        hidden
                    </button>
                </form>
            </div>
            <div className="msg_bottom">
                <div className="msgSend_options">
                <VideocamIcon style={{color:'red'}}/>
               <h3>Live Video</h3>
                </div>

                <div className="msgSend_options">
                <PhotoLibraryIcon style={{color:'green'}}/>
               <h3>Photos/Video</h3>
                </div>

                <div className="msgSend_options">
                <MoodIcon style={{color:'yellow'}}/>
               <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Msg
