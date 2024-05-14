import { jsxEntitiesMap } from "./characterMap";

const jsxRegex = /(?<!<)(<[^>]*>)|(&[a-z]+;)/gi;

export function convertText(text: string): string {
  let result = "";
  let lastIndex = 0;

  text.replace(jsxRegex, (match, p1, p2, offset) => {
    result += replaceChars(text.substring(lastIndex, offset));
    result += match;
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    result += replaceChars(text.substring(lastIndex));
  }

  return result;
}

export function replaceChars(text: string): string {
  return text
    .split("")
    .map((char) => jsxEntitiesMap[char] || char)
    .join("");
}
