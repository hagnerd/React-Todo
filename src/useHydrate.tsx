import React from "react";

export default function useHydrate<T>(
  name: string,
  setter: (value: T) => void
) {
  React.useEffect(() => {
    let initialValue = window.localStorage.getItem(name);

    if (initialValue !== null) {
      setter(JSON.parse(initialValue));
    }

    // eslint-disable-next-line
  }, []);
}
