import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useClickAndNavigate<T>(url: string) {
  const navigate = useNavigate();

  const [state, setState] = useState<T | null>(null);

  // handle click
  const handleClick = (val: T) => {
    setState(val);
  };

  useEffect(() => {
    if (state != null) {
      navigate(`${url}/${state}`);
    }
  }, [state, navigate, url]);

  return { handleClick, state };
}
