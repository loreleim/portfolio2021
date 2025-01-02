import "./globals.css";
import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Lorelei Miyamura",
  description: "Howzum! Lorelei Miyamura is an Interaction Designer from Hawai'i.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
