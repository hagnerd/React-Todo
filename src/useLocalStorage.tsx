import useHydrate from "./useHydrate";
import useSyncToLocalStorage from "./useSyncToLocalStorage";

export default function useLocalStorage<T>(
  name: string,
  setter: (t: T) => void,
  state: T
) {
  useHydrate(name, setter);
  useSyncToLocalStorage(name, state);
}
