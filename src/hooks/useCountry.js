// hooks/useCountry.js
'use client';
import { useEffect, useState } from 'react';

export function useCountry() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const cached = sessionStorage.getItem('userCountry');
    if (cached) {
      setCountry(cached);
      return;
    }

    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country_code); // e.g. "PK"
        sessionStorage.setItem('userCountry', data.country_code);
      })
      .catch(() => setCountry('US')); // fallback
  }, []);

  return country;
}