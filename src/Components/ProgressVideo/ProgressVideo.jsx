import './ProgressVideo.css';
import gsap from 'gsap';
import { useEffect } from 'react';

const ProgressVideo = ({HighLightsData, videoRef, videoDivRef, videoSpanRef, setVideo, videoId, isPlaying, startPlay}) => {
    
    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;
        
        if (span[videoId]) {
          let anim = gsap.to(span[videoId], {
            onUpdate: () => {
              const progress = Math.ceil(anim.progress() * 100);
              
              if (progress !== currentProgress) {
                currentProgress = progress;

                gsap.to(videoDivRef.current[videoId], {
                  width: "50px",
                  borderRadius: "10px"
                });
    
                gsap.to(span[videoId], {
                  backgroundColor: "white",
                  width: `${currentProgress}%`,
                  borderRadius: "0"
                });
              }
            },
    
            onComplete: () => {
              if (isPlaying) {
                gsap.to(videoDivRef.current[videoId], {
                  width: "12px"
                });
                gsap.to(span[videoId], {
                  backgroundColor: "#fff"
                });
              }
            }
          });
    
          if (videoId === 0) {
            anim.restart();
          }
    
          const animUpdate = () => {
            anim.progress(
              videoRef.current[videoId].currentTime / HighLightsData[videoId].duration
            );
          };

          if (isPlaying) {
            gsap.ticker.add(animUpdate);
          } else {
            gsap.ticker.remove(animUpdate);
          }
        }
        
        
        // eslint-disable-next-line
      }, [videoId, startPlay]);
    
    return (
        <div className='progress-video'>
            {HighLightsData.map((_, index) => 
                <span 
                    key={index}
                    ref={(el) => (videoDivRef.current[index] = el)}
                >
                    <span
                        ref={(el) => (videoSpanRef.current[index] = el)}
                    />
                </span>
            )}
        </div>
    )
}

export default ProgressVideo;