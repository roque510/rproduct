import React from 'react';

import '../css/slider.css';

const Slider = () => {


		return (
			<div className="container">
  				<div className="slider">
    				<img id="slider1" className="slide currentSlide" src="https://hoppingthebadger.files.wordpress.com/2016/09/header004.jpg" alt="" />
    				<img className="slide" src="https://www.english-heritage.org.uk/content/news/3190337/Taboo-Tilbury" alt="" />
    				<img  className="slide" src="http://wwwimages.adobe.com/content/dam/acom/en/products/livecycle/images/lifecycle-es4-marquee-1440x600.jpg" alt="" />
    				<img src="https://www.efrontlearning.com/blog/wp-content/uploads/2017/01/mistakes-elearning-developers-make-efrontpro.jpg" alt="" className="slide" />

  				</div>
			</div>

		)
	
}

export default Slider;
