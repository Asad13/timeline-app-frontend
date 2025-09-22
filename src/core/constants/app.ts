import packageJson from '~/package.json';

export const APP_NAME = packageJson.name.replace(/^./, (ch) => ch.toUpperCase());
export const APP_VERSION = packageJson.version;
export const APP_MOTTO = packageJson.description;
export const LOCAL_STORAGE_APP_CONTEXT_KEY = 'timelines';
