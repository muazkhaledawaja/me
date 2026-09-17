import { codeToHtml } from "shiki";

// Build-time only — used inside Server Components (CodeBlock). Shiki's
// singleton highlighter isn't needed here since codeToHtml already caches
// its internal engine; wrapping further would be premature. See plan §6.
export async function highlight(code: string, lang: string) {
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
}
