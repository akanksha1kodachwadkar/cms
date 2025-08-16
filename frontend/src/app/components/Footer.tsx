export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Blog CMS. All Rights Reserved.
      </div>
    </footer>
  );
}
