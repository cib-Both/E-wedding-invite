import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealBatches = gsap.utils.toArray<HTMLElement>('.reveal');

      ScrollTrigger.batch(revealBatches, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12, overwrite: true }
          ),
      });

      const timelineLine = document.querySelector('.timeline-line');
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.timeline',
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: true,
            },
          }
        );
      }
    });

    const onCurtainOpened = () => {
      if ((window as unknown as { __heroAnimated?: boolean }).__heroAnimated) return;
      (window as unknown as { __heroAnimated: boolean }).__heroAnimated = true;
      const heroBg = document.querySelector('.hero-bg img') as HTMLElement | null;
      const eyebrow = document.querySelector('[data-hero="eyebrow"]') as HTMLElement | null;
      const names = document.querySelector('[data-hero="names"]') as HTMLElement | null;
      const date = document.querySelector('[data-hero="date"]') as HTMLElement | null;
      const ring = document.querySelector('[data-hero="ring"]') as HTMLElement | null;
      const scroll = document.querySelector('[data-hero="scroll"]') as HTMLElement | null;
      const petals = gsap.utils.toArray<HTMLElement>('.petal');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (heroBg) {
        tl.fromTo(heroBg, { scale: 1.3, opacity: 0 }, { scale: 1.15, opacity: 0.4, duration: 2.6, ease: 'power2.out' }, 0);
      }

      if (petals.length) {
        tl.fromTo(petals, { opacity: 0, y: -60, rotate: () => gsap.utils.random(-40, 40) }, { opacity: 0.7, y: 0, rotate: 0, duration: 1.4, stagger: 0.08, ease: 'power2.out' }, 0.15);
      }

      if (eyebrow) {
        tl.fromTo(eyebrow, { opacity: 0, y: 20, letterSpacing: '0.25em' }, { opacity: 1, y: 0, letterSpacing: '0.08em', duration: 1.1 }, 0.5);
      }

      if (names) {
        tl.fromTo(names, { opacity: 0, y: 30, scale: 0.94, filter: 'blur(10px)' }, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.5 }, 0.85);
        tl.to(names, { textShadow: '0 0 28px rgba(234, 217, 182, 0.35)', duration: 1.4, ease: 'power2.out' }, 1.4);
      }

      if (date) {
        tl.fromTo(date, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1 }, 1.05);
      }

      if (ring) {
        tl.fromTo(ring, { opacity: 0, rotate: -35, scale: 0.5, y: -14 }, { opacity: 1, rotate: 0, scale: 1, y: 0, duration: 1.1, ease: 'back.out(1.4)' }, 1.25);
        tl.to(ring, { y: -8, duration: 2.2, ease: 'sine.inOut', yoyo: true, repeat: -1 }, '+=0.4');
      }

      if (scroll) {
        tl.fromTo(scroll, { opacity: 0, y: 12 }, { opacity: 0.85, y: 0, duration: 1, ease: 'power2.out' }, 1.6);
        tl.to(scroll, { y: 8, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 }, '+=0.3');
      }

      tl.add(() => {
        const heroLayers = gsap.utils.toArray<HTMLElement>('.eyebrow, .names, .hero-date, .ring-icon');
        if (heroLayers.length) {
          gsap.to(heroLayers, {
            y: (i) => -20 - i * 18,
            opacity: 0.15,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    };

    window.addEventListener('curtain:opened', onCurtainOpened);

    return () => {
      ctx.revert();
      window.removeEventListener('curtain:opened', onCurtainOpened);
    };
  }, []);
};
