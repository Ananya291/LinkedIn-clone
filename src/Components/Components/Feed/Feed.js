import React, { useEffect, useState } from 'react'
import './Feed.css'
import Posts from './Posts'
import { useSelector } from 'react-redux'
import CreateIcon from '@material-ui/icons/Create'
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import db from '../../../Firebase'
import firebase from "../../../Firebase"
import { selectUser } from '../../../features/userSlice'

function Feed() {

  const user = useSelector(selectUser);
  const [input, setInput] = useState(' ');
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection('post').onSnapshot(snapshot => (
      setPost(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('post').add({
      name: user.displayName,
      description: user.email || "",
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className="feed_input">
          {/*Icon */}
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Start a post ' />
            <button onClick={sendPost} type='submit'>send</button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOptions Icon={YouTubeIcon} title='Video' color='#7FC15E' />
          <InputOptions Icon={EventNoteIcon} title='Event' color='#E7A33E' />
          <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#FC9295' />
        </div>

      </div>
      {post.map((
        { id, data: { name, description, message, photoUrl } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed