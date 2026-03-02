import { BASE_API_URL } from "../constants/constant";

const API_BASE = BASE_API_URL.replace(/\/api\/?$/, "");

export const resolveMediaUrl = (path?: string): string => {
  if (!path) {
    return "";
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.replace(/^\/+/, "");
  return `${API_BASE}/storage/${normalizedPath}`;
};
