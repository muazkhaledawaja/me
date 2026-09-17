import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["legacy/**", "docs/**", "moath-portfolio.html"],
  },
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "framer-motion",
              importNames: ["motion"],
              message:
                "Import `m` + LazyMotion instead of `motion` to keep framer-motion out of the eager bundle.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
