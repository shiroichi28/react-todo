
# Todo

Todo is developed with Vite and React. I built this example to showcase components, event handlers, and useState. It does not store anything in the browser's localStorage.



## Tech Stack

**Client:** React, TailwindCSS

**Build Tool:** Vite

## Installation

Clone the repository
```bash
  cd react-todo
  npm install
  npm run dev
```
    
## Deployment

To deploy this project run

```bash
npm install gh-pages --save-dev

```
In the package.json file add these lines before "build": "vite build",
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```
In the vite.config.js file add this line before plugins: [react()],
```bash
base: "/Repository name/",
```
Go to Terminal
```bash
npm run deploy
```

Other Way by Github Actions

**Follow this**: https://github.com/sitek94/vite-deploy-demo

