export const textCut = (text: string): string =>
  text.length >= 30 ? text.slice(0, 30) + "..." : text
