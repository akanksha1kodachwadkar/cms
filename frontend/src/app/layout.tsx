import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Blog CMS",
  description: "A simple blog CMS built with Next.js & Express",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-6 min-h-[80vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
