import React, { useEffect, useState } from 'react';
import { Container } from '../../Components';
import './Hero.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroVideo from '../../assets/videos/hero.mp4';
import smallHeroVideo from '../../assets/videos/smallHero.mp4';

const Hero = () => {
 
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760)
      setVideoSrc(smallHeroVideo)
    else
      setVideoSrc(heroVideo)
    
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    }

  }, [])

  useGSAP(() => {  
    gsap.to(".hero-title", {opacity: 1, delay: 2});
    gsap.to(".hero-tail", {opacity: 1, delay: 2, y: -70});

  }, [])
    
  return (
    <>
      <section id='hero' className='hero'>
        <Container>
          <p className='hero-title'>iPhone 15 Pro</p>
          <div className='hero-video'>
            <video key={videoSrc} autoPlay muted playsInline={true}>
              <source src={videoSrc} type='video/mp4' />
            </video>
          </div>
          <div className='hero-tail'>
            <a className='btn hero-btn' href='#highlights'>Buy</a>
            <p>From $199/ month or $999</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;