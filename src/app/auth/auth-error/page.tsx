'use client';

import Link from 'next/link';

export default function AuthErrorPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #0a0a10 0%, #000000 100%)',
      color: '#ffffff',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'inherit',
    }}>
      <div style={{
        maxWidth: '460px',
        padding: '2.5rem',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(12px)',
      }}>
        <h1 style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
          color: '#e0e0ea',
        }}>
          Confirmação de Acesso
        </h1>
        <p style={{
          fontSize: '0.9rem',
          color: '#b0b0c0',
          lineHeight: '1.6',
          marginBottom: '2rem',
        }}>
          Mesmo que o link de confirmação apresente algum aviso ou já tenha sido verificado pelo seu provedor de e-mail, o processo funciona normalmente. Sua conta já está liberada no sistema.
        </p>
        <Link
          href="/auth"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            transition: 'all 0.3s ease',
          }}
        >
          Ir para o Login
        </Link>
      </div>
    </div>
  );
}
