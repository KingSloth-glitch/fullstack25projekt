// app/status/page.js

// This component runs strictly on the server
export default function StatusPage() {
  const renderedAt = new Date().toLocaleTimeString();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Server-Side Rendered Status</h1>
      <p>This page was generated on the server.</p>
      <div
        style={{
          background: '#f0f0f0',
          padding: '1rem',
          borderRadius: '5px',
        }}
      >
        <strong>Rendered at:</strong> {renderedAt}
      </div>
      <p>
        <em>
          Refresh the page to see the time update instantly from the server!
        </em>
      </p>
    </main>
  );
}
