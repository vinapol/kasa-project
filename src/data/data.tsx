import { useState, useEffect } from 'react';
import type { Property } from "../types/property";

export const useLogements = () => {
  const [data, setData] = useState<Property[]>([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5173/logements.json')
      .then((res) => res.json())
      .then((data: Property[]) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
};