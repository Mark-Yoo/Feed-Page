import { useEffect } from 'react';


export const InitInfiniteScroll = ({
  root, target, threshold = 1.0, rootMargin = '0px', onIntersect,
}) => {
    useEffect(() => {
      if (!root) {
        return;
      }
      const observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold
      });

      if (!target) {
        return;
      }

      observer.observe(target);
      return () => {
        observer.unobserve(target);
      } 
    }, [target, root, rootMargin, threshold, onIntersect]
  );
}
