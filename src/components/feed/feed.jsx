import React,{useState,useEffect} from 'react'
import Msg from './msg/msg'
import './feed.css'
import Story from './story/story'
import Posts from './posts/post'
import db from '../../firebase'

function Feed() {
    const [posts,setPost]=useState([]);
    useEffect(()=>{
      db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
          setPost(snapshot.docs.map(doc=>({id:doc.id
            ,data:doc.data()})))
      })
    },[])
    return (
        <div className='feed'>
            <Story/>
            <Msg/>
            {posts.map(post=>{
                return(
                    <Posts
                    key={post.data.id}
                   profilePic={post.data.profilePic}
                   img={post.data.img}
                   timestamp={post.data.timestamp}
                   msg={post.data.msg}
                   user={post.data.user}
                />
                )
            })}
        </div>
    )
}

export default Feed
