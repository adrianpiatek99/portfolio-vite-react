export const copyToClipboard = (copyContent: string) => {
  navigator.clipboard.writeText(copyContent);
};
