// src/components/MyCarousel.jsx
import React, { startTransition } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const carouselStyle = {
    height: '100vh',  
    width: '80vw',
    backgroundSize: 'cover',
    objectFit: "cover",
    zIndex: 1,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.9)', 
    borderRadius: '10px',
    padding: 0
}

const carouselDiv = {
    height: '100vh',
    width: '80vw'
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

const MyCarousel = () => {
  return (
    <div style={carouselStyle}>
      <Carousel autoplay={true}
      infiniteLoop={true}
      stopOnHover={true}
        showThumbs={false}
        showArrows={false}>
        <div style={carouselDiv}>
          <img src="pexels-ray-bilcliff-1494707.jpg" style={imageStyle} />
          <div style={slideContentStyle}><h1><i>Song of the Sorcerer</i></h1>
          <p><span class="first-letter">I</span>n a land once consumed by power struggles over the Oracle and the Draftsman, a man hiding as an apothecary defies his birthright to protect his mentor, only to have his hidden abilities exposed when their enclave is raided by the oppressive Mortal Order -- and almost used to destroy the world for the second time.</p>
          <p>On the run from a cruel and unusual regime, Andrey and the unwilling oracle Elitza must master their powers and navigate complex alliances to defeat the oracle Marija before the cataclysmic spell bound to Andrey's flesh can manifest.</p>
          <p>"Song of the Sorcerer" delves into themes of love, resilience, and the enduring impact of trauma in a world teetering on the brink of doom, where hope remains steadfast.</p>
          <p> With its intricate magic, palpable political tension, complex characters, and immersive world-building, this gripping tale is sure to captivate readers.</p>
</div>
        </div>
        <div style={carouselDiv}>
          <img src="pexels-lucas-pezeta-3772353.jpg" style={imageStyle}/>
        </div>
        <div style={carouselDiv}>
          <img src="pexels-pixabay-277552.jpg" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
