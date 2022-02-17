import { Avatar } from '@material-ui/core';
import React from 'react';
import './SideBar.css';

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItems">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img className='sidebar_top_image' src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg" alt='' />
                <Avatar className='sidebar_top_avatar' />
                <div className="sidebar_name_email">
                <h2>Ananya Thakur</h2>
                <h4>ananya22@gmail.com</h4>
                </div>
                <div className="sidebar_stats">
                    <div className="sidebar_stats_top">
                        <p>Who viewed You</p>
                        <p className='sidebar_stats_number'>3421</p>
                    </div>
                    <div className="sidebar_stats_top">
                        <p>Views on Post</p>
                        <p className='sidebar_stats_number'>6721</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react.js' )}
                {recentItem('jobseeker')}
                {recentItem('programming')}
                {recentItem('projectManagement')}
                {recentItem('stockmarket')}
            </div>
        </div>
    )
}

export default SideBar