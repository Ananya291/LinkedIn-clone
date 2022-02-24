import React from 'react'
import './NewsArticle.css'


function NewsArticle({ Icon, title, subtitle }) {
    return (
        <div className='newsArticle'>
            <div className="newarticle_header">
                {Icon && <Icon className="newsArticle_icon" />}
            </div>
            <div className="news_subtitle">
            <p className='newsArticle_title'>{title}</p>
                <p className='newArticle_subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}

export default NewsArticle