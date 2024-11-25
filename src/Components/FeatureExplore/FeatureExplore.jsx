import './FeatureExplore.css';

import exploreVideo from '../../assets/videos/explore.mp4';
import explore1Img from '../../assets/images/explore1.jpg';
import explore2Img from '../../assets/images/explore2.jpg';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animation1 } from '../../Animations/Animations';

const FeatureExplore = (props) => {
  
  const videoRef = useRef();
  
  useGSAP(() => {
    animation1('.g-img', {scale: 1, rotate: 1, duration: 1.5, opacity: 1});
    animation1('#explore-video', {onComplete:()=>{videoRef.current.play();}}, {toggleActions: 'play pause reverse restart'});
  }, []);

  return (
    <div className='features-explore'>
      <div className='explore-video'>
        <video 
          id='explore-video' 
          playsInline
          preload='none'
          muted
          autoPlay
          ref={ videoRef }
        >
          <source src={exploreVideo} type='video/mp4' />
        </video>
      </div>
      <div className='explore-images'>
        <div>
          <img className='g-img' src={explore1Img} alt='titanium1' />
        </div>
        <div>
          <img className='g-img' src={explore2Img} alt='titanium2' />
        </div>
      </div>
    </div>
  )
}

export default FeatureExplore;