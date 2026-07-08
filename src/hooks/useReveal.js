import { useEffect, useRef } from 'react';

// Attaches an IntersectionObserver to a container and adds `in-view`
// to any descendant with the `reveal` class once it scrolls into view.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.classList.contains('reveal')
      ? [container]
      : Array.from(container.querySelectorAll('.reveal'));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
