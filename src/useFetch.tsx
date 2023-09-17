import { useEffect, useRef, useState } from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    fetch(url, { signal, ...optionsRef.current })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        } else {
          return res;
        }
      })
      .then((res) => res.json())
      .then((data) => {
        if (!signal.aborted) setData(data);
      })
      .catch((error) => {
        if (!signal.aborted && error instanceof Error)
          console.log(error.message);
      })
      .finally(() => {
        if (!signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
