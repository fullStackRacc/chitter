import { Search } from '@mui/icons-material'
import React from 'react'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'

import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon' />
            <input placeholder='Search Chitter' type='text' />
        </div>
        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={'1548791548225241089'} />
            <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='fullStackRacc'
                options={{ height: 400 }}
            />
            <TwitterShareButton 
                url={'https://github.com/fullStackRacc'}
                options={{ text: 'Check out mah GitHub', via: 'fullStackRacc' }}
            />
        </div>
    </div>
  )
}

export default Widgets