import React from "react";

export default function useSyncToLocalStorage(name, state) {
  const isInitialRender = React.useRef(true);

  React.useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    window.localStorage.setItem(name, JSON.stringify(state));
  });
}
