import React from 'react'

const Banner = ({ label, title, subTitle, img }) => {
  return (
    <div className="mainBanner categoryBanner position-relative">
      <img className="img-fluid rounded-3" src={img} alt="main banner" />

      <div className="mainBannerContent position-absolute">
        <h4>{label}</h4>
        <h5>{title}</h5>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export default Banner