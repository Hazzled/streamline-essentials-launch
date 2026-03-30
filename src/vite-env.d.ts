/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_TRADE_TEMPLATE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
