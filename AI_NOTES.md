# AI Collaboration Notes

## Tool Used

OpenAI Codex

## Selected Requirement

Light/dark theme support.

## Prompts Used

### Prompt: Project foundation

Create a new frontend project for a technical interview task using:

- Vite
- React
- TypeScript
- SCSS
  Requirements:

1. Initialize a clean Vite project using the React + TypeScript template.
2. Install Sass so .scss files work correctly.
3. Do not install any unnecessary libraries, UI frameworks, state management libraries, routing libraries, or CSS frameworks.
4. Keep the project minimal and clean.
5. Remove the default Vite demo content, logos, counters, and unnecessary starter styles.
6. Create a basic SCSS structure:
   - src/styles/\_variables.scss
   - src/styles/\_global.scss
   - src/styles/main.scss
7. Import main.scss from the application entry point.
8. Add a minimal App.tsx that renders:
   - a semantic <main>
   - an <h1> with the text "Test"
9. Keep TypeScript strict and do not use any.
10. Do not add React Router because this application will only have one page.
11. Do not add Tailwind, Bootstrap, Material UI, shadcn, styled-components, or similar dependencies.
12. Make sure the project runs successfully with:
    npm run dev
    Before making changes, inspect the current directory. If the directory already contains an initialized project, do not overwrite files blindly. Adapt the existing project instead.
    After finishing:

- verify that TypeScript compiles without errors
- verify that the dev/build setup works
- briefly summarize which files you created or changed and which npm packages were installed
  Do not start implementing the countries application yet. For now, only set up the clean React + Vite + TypeScript + SCSS foundation.

### Prompt: Theme foundation

Implement a minimal light/dark theme foundation for the existing React, Vite, TypeScript, and SCSS project.

First inspect the current project and SCSS structure. Do not install packages or introduce unnecessary files or abstractions.

Requirements:

- Detect the initial theme with window.matchMedia("(prefers-color-scheme: dark)").
- Apply data-theme="light" or data-theme="dark" to the root <html> element.
- Do not add a visible theme toggle yet.
- Define simple, accessible light and dark palettes using CSS custom properties.
- Keep the light and dark variables in clearly labelled sections of the appropriate SCSS file.
- Update global styles to use the theme variables for background and text colors.
- Add a subtle transition when theme colors change.
- Use the strict TypeScript type type Theme = "light" | "dark".
- Do not use any, Context, state-management libraries, or a complex ThemeProvider.
- Do not implement cards, filtering, sorting, or the final design.

After implementation, run the TypeScript/build checks and verify that both light and dark browser preferences produce the correct theme, background, and text colors. Summarize the files changed and how theme detection works

## What the AI Got Right

- ...

## What Needed Improvement

- ...

## Changes Made After Review

I moved the font declarations into \_global.scss. Since this is a small project with only four font weights, I felt that a separate font stylesheet added unnecessary structure.

## Shipping Assessment

- Would I ship it unchanged?
- What did I verify?
- What would I double-check?
