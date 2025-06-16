import { Inconsolata, Roboto } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Sebastian Gonzalez Cifuentes',
  description: 'Frontend Developer'
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

const inconsolata = Inconsolata({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inconsolata'
});
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${inconsolata.variable}`}>
        {children}
      </body>
    </html>
  );
}
