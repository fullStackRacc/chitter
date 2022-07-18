import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'

import './TweetBox.css'
import db from './firebase'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'A Literal Raccoon',
      username: 'aliteralraccoon',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://pbs.twimg.com/profile_images/1523174916438253568/_NkIdHSd_400x400.jpg'
    })
    setTweetMessage('')
    setTweetImage('')
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://pbs.twimg.com/profile_images/1523174916438253568/_NkIdHSd_400x400.jpg' />
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder='Just screm' type='text' />
            </div>
            <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className='tweetBox__imageInput' placeholder='Optional: Enter image URL' type='text' />
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Screm</Button>
        </form>
    </div>
  )
}

export default TweetBox