import './SectionHeader.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { animation1 } from '../../Animations/Animations';
gsap.registerPlugin(ScrollTrigger);


const SectionHeader = (props) => {
    useGSAP(() => {
      animation1(`.section-header-${props.section}`, {opacity: 1, y: 0, delay: 0.5});
      }, [])
  return (
    <h1 className={`section-header section-header-${props.section}`}>
        {props.children}
    </h1>
  );
}

export default SectionHeader;