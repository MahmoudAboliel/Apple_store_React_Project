import React, { useRef, useState } from 'react';
import './HighLightsVideos.css';
import { VideoSlider, ProgressVideo, ButtonControl } from '../';
import { HighLightsData } from '../../data/HighLightsData';


const HighLightsVideos = () => {

  const videoRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [video, setVideo] = useState({
    videoId: 0,
    startPlay: false,
    isPlaying: false,
    isEnd: false,
    isLastVideo: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const {videoId, startPlay, isPlaying, isEnd, isLastVideo} = video;
  
  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-last':
        setVideo((pre) => ({ ...pre, isLastVideo: true }))
        break;
      case 'video-end':
        setVideo((pre) => ({...pre, isEnd: true, videoId: i + 1}))
        break;
      case 'video-reset':
        setVideo((pre) => ({...pre, videoId: 0, isLastVideo: false}))
        break;
      case 'pause':
        setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
        break;
      case 'play':
        setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
        break;
      default:
        return video;
    }
  }

  const handleLoadedMetaData = (i, e) => setLoadedData(pre => ([...pre, e]));
  
  return (
    <>
      <div className='high-lights-videos'>
        <VideoSlider
          HighLightsData={HighLightsData}
          videoRef={videoRef}
          videoId={videoId}
          startPlay={startPlay}
          isPlaying={isPlaying}
          isEnd={isEnd}
          setVideo={setVideo}
          handleProcess={handleProcess}
          handleLoadedMetaData={handleLoadedMetaData}
          loadedData={loadedData}
        />
        <div className='control-videos'>
          <ProgressVideo
            HighLightsData={HighLightsData}
            videoRef={videoRef}
            videoDivRef={videoDivRef}
            videoSpanRef={videoSpanRef}
            setVideo={setVideo}
            videoId={videoId}
            isPlaying={isPlaying}
            startPlay={startPlay}
          />
          <ButtonControl
            isLastVideo={isLastVideo}
            isPlaying={isPlaying}
            handleProcess={handleProcess}
          />
        </div>
      </div>
    </>
  );

}

export default HighLightsVideos;