// This simulates how a user would use your library after installing it!
// import { Button, Card, ... } from 'my-react-library'

import { Button, Card, CardContent, CardFooter, CardHeader, useToggle } from 'my-react-library';
import 'my-react-library/styles';
import './App.css';

function App() {
  const darkMode = useToggle(false);
  const loading = useToggle(false);

  const handleClick = () => {
    loading.setTrue();
    setTimeout(() => loading.setFalse(), 2000);
  };

  return (
    <div className={`app ${darkMode.value ? 'dark' : ''}`}>
      <header className="header">
        <h1>🎉 Example App</h1>
        <p>This app uses <code>my-react-library</code> just like your users will!</p>
        <Button variant="ghost" size="sm" onClick={darkMode.toggle}>
          {darkMode.value ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </header>

      <main className="main">
        <section className="section">
          <h2>Button Examples</h2>
          <div className="button-row">
            <Button variant="primary" onClick={handleClick} isLoading={loading.value}>
              Primary Button
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="button-row">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section className="section">
          <h2>Card Examples</h2>
          <div className="card-grid">
            <Card variant="elevated" hoverable>
              <CardHeader 
                title="Elevated Card" 
                subtitle="With hover effect"
              />
              <CardContent>
                <p>This is an elevated card with shadow. Try editing the library code!</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">Action</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </CardFooter>
            </Card>

            <Card variant="outlined">
              <CardHeader title="Outlined Card" />
              <CardContent>
                <p>A simple outlined card style.</p>
              </CardContent>
            </Card>

            <Card variant="filled">
              <CardHeader title="Filled Card" />
              <CardContent>
                <p>Card with gradient background.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="section">
          <h2>Hook Example: useToggle</h2>
          <Card variant="outlined">
            <CardContent>
              <p>Dark mode state: <strong>{darkMode.value ? 'ON' : 'OFF'}</strong></p>
              <div className="button-row" style={{ marginTop: '1rem' }}>
                <Button size="sm" onClick={darkMode.toggle}>Toggle</Button>
                <Button size="sm" variant="outline" onClick={darkMode.setTrue}>ON</Button>
                <Button size="sm" variant="outline" onClick={darkMode.setFalse}>OFF</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="footer">
        <p>Edit library in <code>lib/</code> → changes rebuild automatically → refresh this page!</p>
      </footer>
    </div>
  );
}

export default App;
