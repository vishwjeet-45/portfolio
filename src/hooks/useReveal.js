import { useEffect, useRef } from 'react';

// Attaches an IntersectionObserver to a container and adds `in-view`
// to any descendant with the `reveal` class once it scrolls into view.
// Content first renders from defaults and is then replaced by Firestore data,
// so a MutationObserver also picks up `.reveal` elements added later —
// otherwise those new cards would stay invisible.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

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

    const observeAll = () => {
      const targets = container.classList.contains('reveal')
        ? [container]
        : Array.from(container.querySelectorAll('.reveal'));
      targets.forEach((el) => {
        if (!el.classList.contains('in-view')) observer.observe(el);
      });
    };

    observeAll();
    const mutations = new MutationObserver(observeAll);
    mutations.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return ref;
}
