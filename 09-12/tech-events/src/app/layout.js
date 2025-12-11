import "./globals.css";

export const metadata = {
  title: "Events Tech",
  description: "Portale di Eventi rivolti a tecnologie di sviluppo software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
