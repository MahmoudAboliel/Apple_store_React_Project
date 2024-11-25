import React from 'react';
import { Container } from '../../Components';
import './HighLights.css';
import { SectionHeader, HighLightsVideos } from '../../Components';
import { FaRegPlayCircle, FaAngleRight } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { animation1 } from '../../Animations/Animations';

const HighLights = () => {

  useGSAP(() => {
    animation1(".title-link", { opacity: 1, y: 0, delay: 1, stagger: 0.25});
  }, [])
  
  return (
    <>
      <section className='highlights'>
        <Container>
          <div className='highlights-title'>
            <SectionHeader section={"highlights"}>
              Get the highlights
            </SectionHeader>
            <div className='title-links'>
              <p className='title-link'>
                Watch the film
                <FaRegPlayCircle />
              </p>
              <p className='title-link'>
                Watch the event
                <FaAngleRight />
              </p>
            </div>
          </div>
          <HighLightsVideos />
        </Container>
      </section>
    </>
  );
}

export default HighLights;