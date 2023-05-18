// src/components/MyCarousel.jsx
import React, { startTransition } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const carouselStyle = {
    height: '100%',  
    width: '100%',
    backgroundSize: 'cover',
    objectFit: "cover",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.9)', 
    borderRadius: '10px',
    padding: 0
}

const carouselDiv = {
  height: '100%',
  width: '100%',
}

const slideContentStyle = {
  position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 2,
    color: 'white',
    marginBottom: '20px',
    textShadow: '1px 2px solid black'

  };
  

const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: 'sepia(50%)',
    opacity: '50%'
}

const titleStyle = {
  fontSize: '5rem'
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
          <p>"Song of the Sorcerer" delves into themes of love, resilience, the enduring legacy of trauma, and finding hope in a doomed world.</p>
          <p> With its intricate magic, palpable political tension, complex characters, and immersive world-building, this gripping tale is sure to captivate readers.</p>
</div>
        </div>
        <div style={carouselDiv}>
          <img src="DallE Bidding.png" style={imageStyle}/>
          <div style={slideContentStyle}><h1 style={titleStyle}><i>Bidding</i></h1>
        <p><span class="first-letter">L</span>ife is peaceful in Latra; as long as one believes and obeys.</p><p>
          <p>In this dark YA fantasy inspired by the paintings of Heironymous Bosch, nothing is as it seems and one must be careful who--or what--they worship.</p>
        </p>
        </div>
        </div>
        <div style={carouselDiv}>
          <img src="pexels-pixabay-277552.jpg" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
