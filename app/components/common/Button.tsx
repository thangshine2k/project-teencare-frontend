import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      style={{
        padding: '6px 12px',
        background: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
}