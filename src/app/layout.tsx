import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wylamys Santos | Desenvolvedor Front-end',
  description: 'Portfolio de Wylamys Santos, Desenvolvedor Front-end',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
