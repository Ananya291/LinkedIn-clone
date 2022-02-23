import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className="feed_input">
          {/*Icon */}
          <CreateIcon />
          <form>
            <input type='text' placeholder='Start a post ' />
            <button type='submit'>send</button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOptions Icon={YouTubeIcon} title='Video' color='#7FC15E' />
          <InputOptions Icon={EventNoteIcon} title='Event' color='#E7A33E' />
          <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#FC9295' />
        </div>

      </div>
    </div>
  )
}

export default Feed