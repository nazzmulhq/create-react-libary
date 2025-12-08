import { useCallback, useMemo, useState } from 'react';

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  setValue: (value: boolean) => void;
}

/**
 * A hook for managing boolean toggle state
 * @param initialValue - Initial boolean value (default: false)
 * @returns Object with value and toggle functions
 */
export function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return useMemo(
    () => ({
      value,
      toggle,
      setTrue,
      setFalse,
      setValue,
    }),
    [value, toggle, setTrue, setFalse]
  );
}

export default useToggle;
