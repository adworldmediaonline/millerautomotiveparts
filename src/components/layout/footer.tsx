export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white/80">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center text-sm">
          © Copyright {new Date().getFullYear()} millerautomotiveparts. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
