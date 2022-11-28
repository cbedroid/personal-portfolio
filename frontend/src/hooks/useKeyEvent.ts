import { useCallback, useEffect, useState } from "react";

import { lowerArray } from "../utils";

type Props = {
  watch?: string | string[];
  onTrigger?: () => void;
  reset?: boolean;
};
const useKeyEvent = ({ watch, onTrigger, reset }: Props) => {
  const [keyCode, setKeyCode] = useState<string | null>(null);

  /* Watch keyboard Events and trigger action on keyEvent */
  const handleWatch = useCallback(
    (event: KeyboardEvent) => {
      if (!!watch && !!onTrigger && !!keyCode) {
        const watchKeys = Array.isArray(watch) ? watch : [watch];

        if (lowerArray(watchKeys).includes(keyCode.toLowerCase())) {
          event.stopPropagation();
          onTrigger();

          /* reset the keyboard event after triggered */
          !!reset && setKeyCode(null);
        }
      }
    },
    [watch, onTrigger, keyCode, reset],
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setKeyCode(event.code);
      if (!!watch) handleWatch(event);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [watch, handleWatch, setKeyCode]);

  const resetKeyCode = useCallback(() => {
    setKeyCode(null);
  }, [setKeyCode]);

  return {
    keyCode,
    resetKeyCode,
  };
};

export default useKeyEvent;
