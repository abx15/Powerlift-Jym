import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  animation?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'stagger';
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  start?: string;
  markers?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement>(options: ScrollAnimationOptions = {}) => {
  const ref = useRef<T>(null);
  const {
    animation = 'fadeInUp',
    delay = 0,
    duration = 1,
    staggerAmount = 0.1,
    start = 'top 85%',
    markers = false,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {};

    switch (animation) {
      case 'fadeIn':
        fromVars = { opacity: 0 };
        toVars = { opacity: 1 };
        break;
      case 'fadeInUp':
        fromVars = { opacity: 0, y: 50 };
        toVars = { opacity: 1, y: 0 };
        break;
      case 'slideInLeft':
        fromVars = { opacity: 0, x: -100 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'slideInRight':
        fromVars = { opacity: 0, x: 100 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'scaleIn':
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { opacity: 1, scale: 1 };
        break;
      case 'stagger':
        const children = element.children;
        gsap.set(children, { opacity: 0, y: 30 });
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          stagger: staggerAmount,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start,
            markers,
          },
        });
        return;
    }

    gsap.set(element, fromVars);
    gsap.to(element, {
      ...toVars,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start,
        markers,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, staggerAmount, start, markers]);

  return ref;
};

export const useParallax = <T extends HTMLElement>(speed: number = 0.5) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return ref;
};

export const useCounterAnimation = (
  endValue: number,
  duration: number = 2,
  suffix: string = ''
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        element.textContent = Math.floor(counter.value).toLocaleString() + suffix;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [endValue, duration, suffix]);

  return ref;
};

export const useTextReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent || '';
    const chars = text.split('');
    element.innerHTML = chars
      .map((char) => `<span style="display: inline-block; opacity: 0; transform: translateY(50px)">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const spans = element.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};
