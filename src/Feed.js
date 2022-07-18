import React, { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'

import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'

import db from './firebase'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  

  return (
    <div className='feed'>
        <div className='feed__header'>
          <h2>Home</h2>
        </div>
        <TweetBox />
        <FlipMove>
          {posts.map(post => (
            <Post 
              key={post.id}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
        </FlipMove>
    </div>
  )
}

export default Feed