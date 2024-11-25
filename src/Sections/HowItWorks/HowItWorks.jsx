import './HowItWorks.css';
import { Container, Description, Details } from '../../Components';
import chipImg from '../../assets/images/chip.jpeg';
import frameImg from '../../assets/images/frame.png';
import frameVideo from '../../assets/videos/frame.mp4';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { animation1 } from '../../Animations/Animations';


const HowItWorks = () => {
    const videoRef = useRef();
    useGSAP(() => {
        animation1('.chip-img', {opacity: 1, scale: 1, duration: 2});
    }, []);

  return (
    <section className='how-it-works'>
        <Container>
            <div className='chip-img'>
                <img src={chipImg} alt='chipImg' />
            </div>
            <div className='how-it-works-title'>
                <h2>
                    A17 Pro chip
                    <br />
                    Amonster win for gaming
                </h2>
                <p>It's here the bigest redesign in the history of Apple GPUs</p>
            </div>
            <div className='how-it-works-frame'>
                <img src={frameImg} alt='border-frame' />
                <div className='video-frame'>
                    <video 
                        playsInline 
                        muted 
                        preload='none' 
                        autoPlay
                        ref={videoRef}
                        onEnded={() => {
                            videoRef.current.play();
                        }}
                    >
                        <source src={frameVideo} type='video/mp4' />
                    </video>
                </div>
                <p className='name-frame'>Honkai: Star Rail</p>
            </div>
            <div className='how-it-works-text'>
                <div className='how-it-works-description'>
                    <Description section='how-it-works'>
                        A17 Pro is an entirely new class of iPhone chip that delivers our {' '} 
                        <span>
                            best graphic performance by far
                        </span>
                    </Description>
                    <Description section='how-it-works'>
                        Mobile {' '} 
                        <span>
                            games will look and feel so immersive,
                        </span> {' '}
                        with incredibly detailed environments and more reailistic characters. And with industry leading speed and efficiency. A17 Pro takes fast and runs with it
                    </Description>
                </div>
                <Details>
                    <p>New</p>
                    <p className='big-text'>Pro-class GPU</p>
                    <p>with 6 cores</p>
                </Details>
            </div>
        </Container>
    </section>
  )
}

export default HowItWorks;
