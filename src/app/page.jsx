
export default function Page() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1f2937' }}>🏠 Nivasi</h1>
        <p style={{ color: '#6b7280', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Property Management System
        </p>
        <p style={{ color: '#9ca3af', fontSize: '1rem', marginBottom: '3rem' }}>
          Manage your properties, tenants, and payments all in one place
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a 
            href="/account/signup" 
            style={{
              padding: '0.875rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              display: 'inline-block',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Get Started
          </a>
          <a 
            href="/account/signin" 
            style={{
              padding: '0.875rem 2rem',
              backgroundColor: 'white',
              color: '#3b82f6',
              textDecoration: 'none',
              borderRadius: '8px',
              display: 'inline-block',
              fontWeight: '600',
              fontSize: '1rem',
              border: '2px solid #3b82f6'
            }}
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
