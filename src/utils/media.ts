export const resolveMediaUrl = (path?: string): string => {
  if (!path) {
    return "";
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.replace(/^\/+/, "");
  return `/storage/${normalizedPath}`;
};
