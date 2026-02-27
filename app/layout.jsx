import '../styles/globals.css';

export const metadata = {
  title: 'Aurelia – Creative Agency',
  description: 'Aurelia Creative Agency - Design and Digital Solutions',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Fav-Icon-Aurelai-150x150.png"
          sizes="32x32"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
