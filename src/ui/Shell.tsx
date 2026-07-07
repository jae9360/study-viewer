import type { Folder, StudyFile, ViewMode } from "../app/types";

export type SidebarProps = {
  readonly folders: readonly Folder[];
  readonly files: readonly StudyFile[];
  readonly selectedFolderId: string;
  readonly selectedFileId: string | null;
  readonly theme: "opencode" | "resend";
  readonly isDeleteMode: boolean;
  readonly onAddFolder: () => void;
  readonly onDeleteFile: (id: string) => void;
  readonly onDeleteFolder: (id: string) => void;
  readonly onImportFile: (file: File) => Promise<void>;
  readonly onImportSample: () => void;
  readonly onSelectFolder: (id: string) => void;
  readonly onSelectFile: (id: string) => void;
  readonly onToggleDeleteMode: () => void;
  readonly onToggleTheme: () => void;
};

export function Sidebar(props: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">SV</div>
        <div>
          <h1>STUDY_VIEWER</h1>
          <p>Local exam workspace</p>
        </div>
      </div>
      <nav className="tree" aria-label="folder tree">
        {props.folders.map((folder) => (
          <section key={folder.id} className="folder-block">
            <div className="tree-item">
              <button
                className={
                  folder.id === props.selectedFolderId
                    ? "tree-row active"
                    : "tree-row"
                }
                type="button"
                onClick={() => props.onSelectFolder(folder.id)}
              >
                <FolderIcon />
                <span>{folder.name}</span>
              </button>
              {props.isDeleteMode ? (
                <DeleteMark
                  label={`${folder.name} 폴더 삭제`}
                  onClick={() => props.onDeleteFolder(folder.id)}
                />
              ) : null}
            </div>
            {props.files
              .filter((file) => file.folderId === folder.id)
              .map((file) => (
                <div className="tree-item file-item" key={file.id}>
                  <button
                    className={
                      file.id === props.selectedFileId
                        ? "file-row active"
                        : "file-row"
                    }
                    type="button"
                    onClick={() => props.onSelectFile(file.id)}
                  >
                    <span>{file.name}</span>
                    <small>{file.questions.length}문제</small>
                  </button>
                  {props.isDeleteMode ? (
                    <DeleteMark
                      label={`${file.name} 파일 삭제`}
                      onClick={() => props.onDeleteFile(file.id)}
                    />
                  ) : null}
                </div>
              ))}
          </section>
        ))}
      </nav>
      <div className="sidebar-actions">
        <button className="primary" type="button" onClick={props.onAddFolder}>
          Add Folder
        </button>
        <button
          aria-pressed={props.isDeleteMode}
          className={props.isDeleteMode ? "danger active" : "danger"}
          type="button"
          onClick={props.onToggleDeleteMode}
        >
          {props.isDeleteMode ? "Deleting..." : "Delete"}
        </button>
        <label className="secondary">
          Import File
          <input
            aria-label="md/txt 불러오기"
            accept=".md,.txt,text/markdown,text/plain"
            type="file"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0];
              if (file !== undefined) void props.onImportFile(file);
              event.currentTarget.value = "";
            }}
          />
        </label>
        <button className="ghost" type="button" onClick={props.onImportSample}>
          샘플 불러오기
        </button>
      </div>
      <button
        aria-label="Resend night theme"
        aria-pressed={props.theme === "resend"}
        className="theme-toggle"
        type="button"
        onClick={props.onToggleTheme}
      >
        <MoonIcon />
      </button>
    </aside>
  );
}

function DeleteMark({
  label,
  onClick,
}: {
  readonly label: string;
  readonly onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      className="delete-mark"
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      x
    </button>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8a8.7 8.7 0 1 0 11.6 11.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      aria-hidden="true"
      className="folder-icon"
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.8 6.6c0-.9.7-1.6 1.6-1.6h4.2l2 2h7c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H5.4c-.9 0-1.6-.7-1.6-1.6V6.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function TopAppBar({
  mode,
  onChangeMode,
}: {
  readonly mode: ViewMode;
  readonly onChangeMode: (mode: ViewMode) => void;
}) {
  const tabs: readonly { readonly mode: ViewMode; readonly label: string }[] = [
    { mode: "single", label: "단건보기" },
    { mode: "all", label: "모두보기" },
    { mode: "exam", label: "시험보기" },
    { mode: "stats", label: "통계" },
  ];
  return (
    <header className="topbar">
      <strong>Workspace Reader</strong>
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.mode}
            className={mode === tab.mode ? "tab active" : "tab"}
            type="button"
            onClick={() => onChangeMode(tab.mode)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <input aria-label="Search files" placeholder="Search files..." />
    </header>
  );
}

export function EmptyState({
  onImportSample,
}: {
  readonly onImportSample: () => void;
}) {
  return (
    <div className="empty">
      <h2>파일을 불러오면 문제가 표시됩니다.</h2>
      <p>왼쪽 메뉴에서 md/txt 파일을 불러오거나 샘플을 사용하세요.</p>
      <button className="primary" type="button" onClick={onImportSample}>
        샘플 시작
      </button>
    </div>
  );
}

export function Toast({ message }: { readonly message: string }) {
  return (
    <div className={message.length > 0 ? "toast show" : "toast"}>{message}</div>
  );
}
