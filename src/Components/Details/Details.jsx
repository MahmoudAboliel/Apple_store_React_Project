import './Details.css';
import { useGSAP } from '@gsap/react';
import { animation1 } from '../../Animations/Animations';

const Details = (props) => {

    useGSAP(() => {
      animation1('.details', {opacity: 1, y: 5, duration: 4});
    }, []);

  return (
    <div className='details'>
        {props.children}
    </div>
  )
}

export default Details;