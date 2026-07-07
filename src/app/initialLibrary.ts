import { createId } from "../infra/id";
import type { Folder, LibraryState } from "./types";

export function ensureInitialFolder(
  state: LibraryState,
  saveFolders: (folders: readonly Folder[]) => void,
): LibraryState {
  if (state.folders.length > 0) return state;
  const folder: Folder = {
    id: createId("folder"),
    name: "기본 폴더",
    createdAt: Date.now(),
  };
  saveFolders([folder]);
  return { ...state, folders: [folder] };
}
