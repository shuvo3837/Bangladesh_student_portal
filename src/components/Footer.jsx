export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Logo + Description */}
        <div>
          <h2 className="text-xl font-bold mb-3">Bangladesh Student Portal</h2>
          <p className="text-sm leading-6">
            A one-stop platform for Bangladeshi students to access jobs, funds,
            guidelines, and educational information easily.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/features" className="hover:text-primary">Features</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p>Email: <span className="font-medium">support@bsp.com</span></p>
          <p>Phone: <span className="font-medium">+880123456789</span></p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 border-t pt-4 text-sm">
        © {new Date().getFullYear()} Bangladesh Student Portal — All Rights Reserved.
      </div>
    </footer>
  );
}
