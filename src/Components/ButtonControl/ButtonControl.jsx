import './ButtonControl.css';
import { MdPlayCircle, MdReplayCircleFilled, MdPauseCircle } from "react-icons/md";

const ButtonControl = ({isLastVideo, isPlaying, handleProcess}) => {
    return (
        <button 
            className='btn btn-video'
            onClick={
              isLastVideo
              ? () => handleProcess('video-reset')
              : isPlaying
              ? () => handleProcess('pause')
              : () => handleProcess('play')
            }
        >
            {
              isLastVideo
              ? <MdReplayCircleFilled />
              : isPlaying
              ? <MdPauseCircle />
              : <MdPlayCircle />
            }
            
        </button>
    )
}

export default ButtonControl;