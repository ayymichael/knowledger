import { defineConfig, globalIgnores } from "eslint/config";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/tailwind.config.js", "src/shared/ui/*.tsx"]), {
    extends: compat.extends("next/core-web-vitals", "prettier"),
    plugins: {
        "react-refresh": reactRefresh,
        prettier,
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-target-blank": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/button-has-type": "off",
        "react/require-default-props": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/alt-text": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-filename-extension": [1, {
            extensions: [".ts", ".tsx"],
        }],
        "no-plusplus": "off",
        "no-console": 1,
        "no-param-reassign": "off",
        radix: "off",
        "no-nested-ternary": "off",
        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
        }],
        "max-len": ["error", {
            code: 200,
        }],
    },
}]);