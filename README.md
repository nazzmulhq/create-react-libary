# create-react-libary 🚀

Create a modern React component library with Vite + TypeScript in seconds!

## Usage

```bash
npx create-react-libary
```

Or with a project name:

```bash
npx create-react-libary my-awesome-lib
```

## What You Get

- ⚡ **Vite** - Lightning-fast builds
- 🔷 **TypeScript** - Full type support with `.d.ts` generation
- ⚛️ **React 19** - Latest React support
- 📦 **Multiple formats** - ESM, CJS, UMD
- 🎨 **CSS bundled** - Styles included
- 🧪 **Example app** - Test your library like a real user

## After Creation

### Terminal 1: Compile library
```bash
cd my-awesome-lib
npm install
npm run build:watch
```

### Terminal 2: Run example app
```bash
cd my-awesome-lib/example
npm install
npm run dev
```

Opens at **http://localhost:3001**

## Project Structure

```
my-awesome-lib/
├── lib/           # Your library source code
│   ├── components/
│   ├── hooks/
│   └── main.ts
├── example/       # Test app (like user's project)
└── dist/          # Built output
```

## Publishing

```bash
npm run build
npm publish
```

## License

MIT
