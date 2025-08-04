// components/Layout.jsx

import Head from 'next/head';
import PageShell from './PageShell';
import Navbar from './Navbar';

export default function Layout({ children, title = "Flourish – Sensory Well-Being" }) {
  return (
    <PageShell>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Flourish | Sensory Well-Being Coaching and Training" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;600&display=swap"
        rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="px-4 md:px-8 lg:px-24 py-12">{children}</main>
    </PageShell>
  );
}
