import React, {useState, useRef, useEffect, Suspense} from "react";

export default function LazySection({children, minHeight = "300px"}) {
  const ref  = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); io.disconnect(); } },
      {rootMargin: "400px"} // start loading 400px before entering viewport
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show
        ? <Suspense fallback={<div style={{minHeight}} />}>{children}</Suspense>
        : <div style={{minHeight}} />
      }
    </div>
  );
}
