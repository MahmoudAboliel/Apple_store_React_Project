import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animation1 = (target, animeProps, scrollProps) => {
    gsap.to(target, {
        ...animeProps,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart none restart none',
            start: 'top 85%',
            ...scrollProps,
        }
    });
}