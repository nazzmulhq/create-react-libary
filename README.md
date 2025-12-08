# My React Library 📦

A modern React 19 component library built with Vite + TypeScript.

## 📁 Clean Project Structure

```
my-react-library/
├── lib/                 # 📚 Your library source code
│   ├── components/      # React components
│   │   ├── Button/
│   │   └── Card/
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utilities
│   └── main.ts          # Entry point
├── example/             # 🧪 Test app (simulates user install)
│   └── src/App.tsx
├── dist/                # 📦 Built output (auto-generated)
├── vite.config.ts       # Build config
└── package.json
```

---

## 🚀 How to Run (Two Terminals)

### **Terminal 1: Library Compiler**
```bash
cd /home/nazmul/Desktop/react-frontend-libary-maker
npm run build:watch
```
Watches `lib/` and rebuilds on every change.

### **Terminal 2: Example App**
```bash
cd /home/nazmul/Desktop/react-frontend-libary-maker/example
npm run dev
```
Opens at **http://localhost:3001** - uses your library like a real user!

---

## 🔄 Development Workflow

1. **Edit** files in `lib/` (e.g., Button.tsx)
2. **Terminal 1** auto-rebuilds → see "built in Xms"
3. **Refresh** browser at localhost:3001

---

## 📦 For Users Installing Your Library

```tsx
import { Button, Card } from 'my-react-library';
import 'my-react-library/styles';

function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

---

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build library once |
| `npm run build:watch` | Watch mode (auto-rebuild) |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript check |
