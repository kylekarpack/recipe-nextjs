/**
 * Change a protocol-relative URL to be HTTPS
 * @example makeNonProtocolRelative("//google.com"); // Outputs "https://google.com"
 */
export const makeNonProtocolRelative = (url: string): string => {
  if (!url) {
    return "";
  }
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
};
