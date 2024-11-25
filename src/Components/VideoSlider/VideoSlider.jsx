import './VideoSlider.css';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const VideoSlider = ({HighLightsData, videoRef, videoId, startPlay, isPlaying, isEnd, setVideo, handleProcess, handleLoadedMetaData, loadedData}) => {
    
    useGSAP(() => {
    
        gsap.to('.slider', {
          transform: `translateX(${window.innerWidth < 760 ? -102 * videoId : -100 * videoId}%)`,
          duration: 2,
          ease: 'power2.inOut', // show visualizer https://gsap.com/docs/v3/Eases
        });
    
        gsap.to('#video', {
          scrollTrigger: {
            trigger: '#video',
            toggleActions: 'restart none none none',
          },
          onComplete: () => {
            setVideo((pre) => ({...pre, startPlay: true, isPlaying: true,}));
          }
        });
      }, [isEnd, videoId]);
    
      useEffect(() => {
        if (videoRef.current[videoId] &&   loadedData.length > HighLightsData.length - 1) {
          if (!isPlaying) {
            videoRef.current[videoId].pause();  
          }
          else {
            startPlay && videoRef.current[videoId].play();
          }
        }
        // eslint-disable-next-line
      }, [startPlay, videoId, isPlaying, loadedData]);
    
    
    return (
        <div className='slider-videos'>
            {
                HighLightsData.map((list, i) => 
                  <div key={list.id} className='slider'>
                    <div className='video-container'>
                        <video
                          id='video' 
                          className='' 
                          playsInline 
                          muted
                          preload='auto'
                          ref={(el) => (videoRef.current[i] = el)}
                          onPlay={() => {
                          if (!isPlaying) 
                            setVideo((pre) => ({...pre, isPlaying: true}));
                          }}
                          onEnded={() => {
                            if (i !== HighLightsData.length - 1) 
                              handleProcess('video-end', i);
                            else 
                              handleProcess('video-last');
                            }}
                            onLoadedMetadata={(e) => (handleLoadedMetaData(i, e))}
                        >
                            <source src={list.video} type='video/mp4' />
                        </video>
                        <div className='video-text'>
                            {list.textList.map((text, i) =>
                              <p key={i}>
                                {text}
                              </p>
                            )}
                        </div>
                    </div>
              </div>
            )
          }
        </div>
  )
}

export default VideoSlider;