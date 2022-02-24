import React from 'react'
import './Posts.css'
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendIcon from '@material-ui/icons/Send';

function Posts() {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h4>Ananya Thakur</h4>
                    <p>Software Engineer at microsoft</p>
                </div>
            </div>
            <div className="post_body">
                <p>message</p>
            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
                <InputOptions Icon={CommentOutlinedIcon} title='Comment' color='gray'/>
                <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray'/>
                <InputOptions Icon={SendIcon} title='Send' color='gray'/>
            </div>
        </div>
    )
}

export default Posts