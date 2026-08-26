import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // dot follows immediately
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      // ring lags slightly
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    };
    const onLeaveLink = () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    };
    const onEnterProject = () => {
      dot.classList.add('project-hovered');
      ring.classList.add('project-hovered');
    };
    const onLeaveProject = () => {
      dot.classList.remove('project-hovered');
      ring.classList.remove('project-hovered');
    };

    const bindHovers = () => {
      document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
      document.querySelectorAll('[data-cursor="project"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterProject);
        el.addEventListener('mouseleave', onLeaveProject);
      });
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    // re-bind after slight delay to catch all DOM elements
    setTimeout(bindHovers, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
