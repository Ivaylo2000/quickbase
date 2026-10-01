# AI Collaboration Notes

## Tool Used

OpenAI Codex

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
   - an <h1> with the text "Countries"
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

#### Project foundation change after review

I moved the font declarations into `_global.scss`. Since this is a small project with only four font weights, I felt that a separate font stylesheet added unnecessary structure.

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

#### What the AI got right

Codex created a simple theme utility with a strict `Theme` type, detected the operating-system preference with `window.matchMedia`, and applied the selected theme to the root `<html>` element through the `data-theme` attribute. It also defined the light and dark colors as CSS custom properties and updated the global styles to use them.

#### What needed improvement

The initial implementation only used the operating-system preference. That was enough for the theme foundation, but after adding a visible theme picker, the user's choice was not saved and would be lost after reloading the page.

#### Changes I made after review

Codex helped connect the theme picker to the existing theme logic. I then added `localStorage` support because the generated solution did not persist the user's choice. The application now restores a valid saved theme after a page reload and uses the operating-system preference only when no saved theme exists.

## Shipping Assessment

I would not ship the AI's first implementation unchanged because it did not preserve the user's selected theme. After adding `localStorage` persistence and reviewing the final behavior, I would be comfortable shipping it for the scope of this task.

I verified the production build, operating-system theme detection, manual theme switching, persistence after a page reload, keyboard navigation, loading behavior, and the friendly error state. I also ran Lighthouse against the production preview and received scores of 94 for performance, 100 for accessibility, 100 for best practices, and 83 for SEO.

Before shipping a production application, I would test the theme in additional browsers and devices and add the remaining SEO improvements identified by Lighthouse, including a meta description and a valid `robots.txt`. I left those SEO changes out because this task is intended to run locally and does not require deployment or search-engine indexing.
