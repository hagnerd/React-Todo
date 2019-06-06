import React from "react";

export default function useHydrate(name, setter) {
  React.useEffect(() => {
    let initialValue = window.localStorage.getItem(name);

    if (initialValue !== null) {
      setter(JSON.parse(initialValue));
    }

    // eslint-disable-next-line
  }, []);
}
