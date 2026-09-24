import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300 font-sans">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
        
        {/* Brand & Socials Section */}
        <div className="space-y-4">
          <Link to="/" className="inline-block group">
            <h2 className="text-3xl font-black tracking-tight text-white transition-transform duration-300 group-hover:scale-105">
              Dina<span className="text-emerald-500 transition-colors duration-300 group-hover:text-emerald-400">Mart</span>
            </h2>
          </Link>

          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted destination for modern shopping, quality products, and unbeatable prices.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 text-xl">
            {[
              { icon: FaFacebook, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaTwitter, href: "#" },
              { icon: FaYoutube, href: "#" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">Shop</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { name: "All Products", path: "/products" },
              { name: "Fashion", path: "/products?category=fashion" },
              { name: "Electronics", path: "/products?category=electronics" },
              { name: "New Arrivals", path: "/products?sort=new" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="inline-block text-gray-400 transition-all duration-200 hover:text-emerald-400 hover:translate-x-1.5"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">Support</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["Help Center", "Shipping & Delivery", "Returns & Refund", "Contact Us"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="inline-block text-gray-400 transition-all duration-200 hover:text-emerald-400 hover:translate-x-1.5"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & App Download Section */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">Get the App</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Shop faster and get exclusive deals on our mobile app.
          </p>

          {/* App Store / Google Play Buttons with Live Screenshots/Images */}
          <div className="flex flex-col gap-3 pt-1">
            <a
              href="#"
              className="group flex items-center justify-between rounded-xl bg-gray-900 px-4 py-2.5 border border-gray-800 transition-all duration-300 hover:border-emerald-500 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3">
                <FaGooglePlay className="text-2xl text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-left">
                  <p className="text-[10px] font-medium uppercase text-gray-400">GET IT ON</p>
                  <p className="text-xs font-semibold text-white">Google Play</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=100&auto=format&fit=crop&q=60"
                alt="Android App Preview"
                className="h-8 w-8 rounded-lg object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              />
            </a>

            <a
              href="#"
              className="group flex items-center justify-between rounded-xl bg-gray-900 px-4 py-2.5 border border-gray-800 transition-all duration-300 hover:border-emerald-500 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3">
                <FaApple className="text-2xl text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-left">
                  <p className="text-[10px] font-medium uppercase text-gray-400">Download on the</p>
                  <p className="text-xs font-semibold text-white">App Store</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&auto=format&fit=crop&q=60"
                alt="iOS App Preview"
                className="h-8 w-8 rounded-lg object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800/80 bg-gray-950 py-6 text-center text-xs text-gray-500">
        © 2026 <span className="font-semibold text-emerald-500">DinaMart</span>. All rights reserved.
      </div>
    </footer>
  );
}