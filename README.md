# next-jigs

`next-jigs` came about because I miss the DX I had in Laravel when working in Node.js. Right now it only does 2 things – scaffold new pages and components.

## Installation

`npm i next-jigs --save-dev`

### Notes

1. This helper defaults to TypeScript. If you want to generate JavaScript files instead use the `--js` option.
2. Use the `--help` option with any command to learn more.
3. It will not overwrite existing files.

## Usage

### Scaffolding Pages
`next-jigs make:page [options] [pageName]`

Where `options` may be `--api` if you want to create an API route and `--js` if you want to generate `.jsx` files.

`pageName` will be automatically capitalized in the generated function name. 

For example: `next-jigs make:page about` will create a new page: `./pages/about/index.tsx` with the contents:

```typescript
export default function About() {
    return (
        <div>About</div>
    )
}
```

And `next-jigs make:page about --api` will create a new page: `./pages/api/about/index.ts` with the contents:

```typescript
export default function handler(req, res): void {
    res.status(200);
}
```

### Scaffolding Components

`next-jigs make:component [componentName]`

`componentName` will be automatically capitalized in the generated function name.

For example: `next-jigs make:component header/about` will create a new component: `./components/header/about/index.tsx` with the contents:

```typescript
export default function About() {
    return (
        <div>About</div>
    )
}
```

## Contributing

PR's and issues welcome