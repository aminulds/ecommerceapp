import React from "react";
import { Link } from "react-router-dom";
import banner1 from '../images/main-banner-1.jpg';
import { bannerData, categoryData, serviceData } from "../data";
import Banner from "../components/Banner";
import Service from "../components/Service";
import Category from "../components/Category";

const Header = () => {
  return (
    <>
      {/* Banner */}
      <section className="banner py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="mainBanner position-relative">
                <img className="img-fluid rounded-3" src={banner1} alt="main banner" />
                <div className="mainBannerContent position-absolute">
                  <h4>Suppercharged for pros</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.99 or $41.63/mon.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">

                {bannerData.map((item) => <Banner key={item.id} label={item.label} title={item.title} subTitle={item.subTitle} img={item.img} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="services py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="serviceContent d-flex align-items-center justify-content-between">
                {serviceData.map((item) => <Service key={item.id} img={item.img} title={item.title} subTitle={item.subTitle} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="category py-5">
        <div className="container-xxl">
          <div className="categoryContent p-3">
            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-4">
              {categoryData.map((item) => <Category key={item.id} title={item.title} subTitle={item.subTitle} img={item.img} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;