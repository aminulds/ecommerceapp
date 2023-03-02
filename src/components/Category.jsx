import React from 'react'

const Category = ({ title, subTitle, img }) => {
  return (
    <div className='col'>
      <div className="categoryItem d-flex align-items-center justify-content-around">
        <div className='me-2'>
          <h6>{title}</h6>
          <p className="mb-0">{subTitle}</p>
        </div>
        <img className='img-fluid' src={img} alt={title} />
      </div>
    </div>
  )
}

export default Category