# Countries

## Tech Stack

### React

I chose React with Vite because this is a small, client-side single-page application. The app does not require routing, server-side rendering, or backend functionality, so using Next.js would add unnecessary complexity.

### TypeScript

I chose TypeScript because static typing helps catch mistakes during development and makes component props, country data, and theme values easier to understand and maintain.

### SCSS

I chose SCSS because I enjoy working with it, especially the nesting it provides. Nesting helps me keep related component styles grouped together and makes the stylesheets easier to read and maintain.

### Lucide

I chose Lucide because it provides a wide selection of icons as lightweight React components. It integrates easily with React and keeps the icons consistent throughout the application.

### UIverse.io

I used [UIverse.io](https://uiverse.io/) for the theme picker and loader. UIverse is not an installed library; it provides premade community components that can be adapted and integrated directly into an application. I chose it because it offers polished components that are quick to customize and use.

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your machine.

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Ivaylo2000/quickbase.git
cd quickbase
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Create and preview a production build

```bash
npm run build
npm run preview
```

The production preview is usually available at `http://localhost:4173`.

## Improvements With More Time

- Add sorting by population and total area.
- Add pagination.
- Add subtle card animations and a skeleton loading state to improve the loading experience.
- Add production SEO metadata and a valid `robots.txt` if the application is deployed.
