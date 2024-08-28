import { useEffect, useRef } from 'react';

const InfiniteScroll = ({ loadMore, hasMore }) => {
  const observerRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (lastElementRef.current) {
      observerRef.current.observe(lastElementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore]);

  return <div ref={lastElementRef}></div>;
};

export default InfiniteScroll;
