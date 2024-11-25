import './Description.css';
import { useGSAP } from '@gsap/react';
import { animation1 } from '../../Animations/Animations';


const Description = (props) => {

    useGSAP(() => {
      animation1(`.g-text-${props.section}`, {opacity: 1, y: 5, duration: 4});
    }, []);

  return (
    <p className={`g-text g-text-${props.section}`}>
        {props.children}
    </p>    
  )
}

export default Description;