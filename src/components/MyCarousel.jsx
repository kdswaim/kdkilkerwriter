import React, { startTransition } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const carouselStyle = {
  width: '100%',
  borderRadius: '10px',
  padding: '0',
}

const carouselDiv = {
  height: '70vh',
  width: '100%',
  objectFit: 'cover',
  position: 'relative'
}

const slideContentStyle = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  textShadow: '1px 2px solid black',
  padding: '1vh',
  textAlign: 'center',
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: 'sepia(50%)', contrast: '100%',
  opacity: '50%'
}

const titleStyle = {
  fontSize: '3rem'
}

const MyCarousel = () => {
  return (
    <div style={carouselStyle}>
      <Carousel autoplay={true}
      infiniteLoop={true}
      stopOnHover={true}
        showThumbs={false}
        showArrows={false}>
        <div style={carouselDiv}>
          <img src="DallE SotS.png" style={imageStyle} />
          <div style={slideContentStyle}><h1 style={titleStyle}><i>Song of the Sorcerer</i></h1>
          <p><span class="first-letter">I</span>n a land once consumed by power struggles over the Oracle and the Draftsman, healer Andrey is captured by the Mortal Order and becomes a weapon of destruction. </p>
          <p>Now on the run, he must defy the cataclysmic spell bound to his flesh before it can take hold.</p>
</div>
        </div>
        <div style={carouselDiv}>
          <img src="DallE Bidding.png" style={imageStyle}/>
          <div style={slideContentStyle}><h1 style={titleStyle}><i>Bidding</i></h1>
        <p><span class="first-letter">L</span>ife is peaceful in Latra; as long as one believes and obeys.</p>
          <p>In this dark YA fantasy inspired by the paintings of Heironymous Bosch, nothing is as it seems and one must be careful who--or what--they worship.</p>
        </div>
        </div>
        <div style={carouselDiv}>
          <img src="2.jpg" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
