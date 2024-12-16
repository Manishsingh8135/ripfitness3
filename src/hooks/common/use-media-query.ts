// hooks/use-media-query.ts
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  // Initialize state with undefined to handle SSR
  const [matches, setMatches] = useState<boolean>(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false; // Default to false for SSR
  });

  useEffect(() => {
    // Return early if no window (SSR)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    // Set initial value
    setMatches(mediaQuery.matches);

    // Use the more modern event listener method
    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener('change', onChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, [query]); // Only re-run if query changes

  return matches;
}