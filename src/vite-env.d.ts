/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_PATH: string;
  // add more vars here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
