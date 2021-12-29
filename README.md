<h1 align="center">
  <br>
  The Thermopolia App
  <br>
</h1>

<h4 align="center">A daily recipe recommendation and newsletter, check out the <a href="https://github.com/AmineAML/thermopolia-api" target="_blank">API</a></h4>

<p align="center">
  <a href="#ethymology">Ethymology</a> •
  <a href="#how-to-use">How to use</a> •
  <a href="#built-with">Built with</a> •
  <a href="#repository-structure">Repository structure</a>
  <a href="#license">License</a> •
</p>

![screenshot](thumbnail_of_thermopolia.png)

## Ethymology
Thermopolia (plural of thermopolium) was the ancient Roman/Greek equivanlt to restaurants. It was a commercial establishment for purshasing ready-to-eat food and often with servings similar to modern fast food. This name is a good description to what the application offers from easy-to-prepare recipes, newsletter subscriptions and delivery and other amazing features.

## How to use
### Installation
This app is built with [Node.js](https://nodejs.org/en/) v14+ and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v8+, you can use Yarn or any other package manager after doing the required changes.
```bash
# Clone the repository
git clone git@github.com:AmineAML/thermopolia-app.git
cd thermopolia-app
npm install
```
### Developing
Before running the app, rename `.env.example` to `.env` and add your environment variables.
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building
We're using the [Netlify adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify), the build could change depending on which [adapter](https://kit.svelte.dev/docs#adapters) you choose to use.
```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

### Deploying
We're using [Netlify](https://www.netlify.com/) with plugins to deploy this project, deploying may differ depending on the [adapter](https://kit.svelte.dev/docs#adapters) that you may choose to use or you can use [Docker](https://www.docker.com/).

## Built with
- [SvelteKit](https://kit.svelte.dev/)
- [svelte-loading-spinner](https://github.com/Schum123/svelte-loading-spinners)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind CSS Scrollbar Plugin](https://github.com/adoxography/tailwind-scrollbar)
- [Svelte forms lib](https://github.com/tjinauyeung/svelte-forms-lib)
- [daisyUI](https://daisyui.com)
- [Figma](https://www.figma.com)

## Repository structure
```
/
├─ docs/             # Documentation
├─ src/
│  ├─ lib/           # Components, stores, types and variables
│  │
│  ├─ routes/        # Pages
│
├─ static/           # Assets
└─ ..                
```

## License
This project is license under [MIT](https://github.com/AmineAML/thermopolia-app/blob/main/LICENSE).