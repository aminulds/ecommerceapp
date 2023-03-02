import React from 'react';

const Service = ({ img, title, subTitle }) => {
  return (
    <div className='d-flex align-items-center gap-15'>
      <img className='img-fluid' src={img} alt={title} />
      <div>
        <h6>{title}</h6>
        <p className='mb-0'>{subTitle}</p>
      </div>
    </div>
  )
}

export default Service