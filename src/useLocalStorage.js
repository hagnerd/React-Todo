import useHydrate from "./useHydrate";
import useSyncToLocalStorage from "./useSyncToLocalStorage";

export default function useLocalStorage(name, setter, state) {
  useHydrate(name, setter);
  useSyncToLocalStorage(name, state);
}
