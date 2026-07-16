import type { LibraryState } from "./types";

export function ensureInitialFolder(
  state: LibraryState,
  saveLibrary: (state: LibraryState) => void,
): LibraryState {
  if (state.folders.length > 0) return state;
  saveLibrary(state);
  return state;
}
