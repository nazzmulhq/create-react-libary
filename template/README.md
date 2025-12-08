# My React Library 📦

A modern React 19 component library built with Vite + TypeScript.

## 🚀 How to Run (Two Terminals)

### Terminal 1: Library Compiler
```bash
npm run build:watch
```
Watches `lib/` and rebuilds on every change.

### Terminal 2: Example App
```bash
cd example && npm install && npm run dev
```
Opens at **http://localhost:3001**

## 🔄 Workflow

1. Edit files in `lib/` (e.g., Button.tsx)
2. Terminal 1 auto-rebuilds
3. Refresh browser at localhost:3001

## 📁 Structure

```
├── lib/           # Your library code
├── example/       # Test app
├── dist/          # Built output
└── package.json
```

## 📦 For Users

```tsx
import { Button, Card } from 'your-library-name';
import 'your-library-name/styles';

<Button variant="primary">Click Me</Button>
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build library |
| `npm run build:watch` | Watch mode |
| `npm run lint` | ESLint |
