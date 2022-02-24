import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import NewsArticle from './NewsArticle'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  return (
    <div className='widgets'>

      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon className='widgets_header_icon' />
      </div>

      <div className="widgets_newsArticle">

        <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />
         <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />
         <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />
         <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />
         <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />
         <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />
         <NewsArticle
          Icon= {FiberManualRecordIcon}
          title="Corona Virus India Update:"
          subtitle="Top News 9k readers"
        />

      </div>
    </div>
  )
}

export default Widgets
