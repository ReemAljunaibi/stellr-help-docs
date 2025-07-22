# Stellr Help Documentation

This repository contains the source for the Stellr platform user guide.  
It is built using the [Docusaurus](https://docusaurus.io/) static site generator.  
The goal is to provide a living, version‑controlled knowledge base that can be updated easily as the product evolves.

## Getting started

To preview and edit the documentation locally you will need Node.js version 18 or newer.  
Once Node is available, install the project dependencies and start the development server:

```sh
cd stellr-help-docs
npm install
npm run start
```

After installation, the site will be served at http://localhost:3000.  
Any changes you make to Markdown files in the `docs/` directory will hot‑reload in your browser.

## Project layout

The most important files and directories in this template are:

| Path                | Purpose                                                                        |
|---------------------|--------------------------------------------------------------------------------|
| `docs/`             | Markdown files for your documentation. Each file becomes a page.               |
| `docusaurus.config.js` | Main configuration file for your site. Includes title, URL and navbar links. |
| `sidebars.js`       | Defines the order and grouping of docs in the sidebar.                         |
| `package.json`      | Lists your project’s dependencies and npm scripts.                             |

For more details on the default structure of a Docusaurus site, see the official docs【650391352171682†L134-L185】.

## Deployment

This site can be deployed to any static hosting provider.  
We recommend using [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) for ease of setup.  
The `build` script will generate static files in the `build/` directory:

```sh
npm run build
```

Deploy those files to your hosting provider and configure DNS so the site is reachable at `help.stellr.ae`.

## Updating

Documentation is written in Markdown under the `docs/` folder.  
To add new pages, simply create a new `.md` file and reference it in `sidebars.js`.  
Docusaurus can also auto‑generate the sidebar from the file system structure【658891107669491†L137-L151】 if you prefer not to maintain it manually.

## License

This project is provided without warranty as a starting point for your own documentation.  
Feel free to customize it to match your branding and workflow.
