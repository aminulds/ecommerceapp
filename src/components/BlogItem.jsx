import React from 'react'
import { Link } from 'react-router-dom';

const BlogItem = ({ img, date, title, description }) => {
  return (
    <div className='col blogItem'>
      <div className='card'>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <p className='text-muted'>{date}</p>
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <Link href="blog" className="btn button">Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem