import { useEffect, useState } from 'react';

export function useUrlSync(paramName: string, initialValue: string = '') {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName) || initialValue;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(paramName, value);
    } else {
      params.delete(paramName);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }, [paramName, value]);

  return [value, setValue] as const;
}
