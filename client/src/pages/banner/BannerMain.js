import React from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 function SampleNextArrow(props) {
    const { className, style} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
  }

const BannerMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Link to={'/banner/banner1'}>
                        <img src={process.env.PUBLIC_URL + '/images/banner/banner1.svg'}/>
                    </Link>
                </div>
                <div>
                    <Link to={'/banner/banner2'}>
                        <img src={process.env.PUBLIC_URL + '/images/banner/banner2.svg'}/>
                    </Link>
                </div>
                <div>
                    <Link to={'/banner/banner3'}>
                        <img src={process.env.PUBLIC_URL + '/images/banner/banner3.svg'}/>
                    </Link>
                </div>
                <div>
                    <Link to={'/banner/banner4'}>
                        <img src={process.env.PUBLIC_URL + '/images/banner/banner4.svg'}/>
                    </Link>
                </div>
                <div>
                    <Link to={'/banner/banner5'}>
                        <img src={process.env.PUBLIC_URL + '/images/banner/banner5.svg'}/>
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default BannerMain;