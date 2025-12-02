const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6 lg:px-12">
      {/* Top icons section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
        <div>
          <h3 className="font-bold mb-2 flex items-center gap-2 text-lg">
            💲 Flexible Payment
          </h3>
          <p className="text-sm">
            Choose the payment plan that works best for you.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2 flex items-center gap-2 text-lg">
            🕑 Best Online Support
          </h3>
          <p className="text-sm">Always available for questions or issues.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2 flex items-center gap-2 text-lg">
            📦 14 Day Returns
          </h3>
          <p className="text-sm">Return items within 14 days for a refund.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2 flex items-center gap-2 text-lg">
            🎧 Premium Support
          </h3>
          <p className="text-sm">Priority help from our dedicated team.</p>
        </div>
      </div>

      {/* Footer Main */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12">
        {/* Logo + Address */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide mb-4">
            <span className="border px-2 text-white">cosmika</span>
          </h1>
          <p className="text-sm">
            99 New Theme St. XY, USA 12345
            <br />
            Beside the Sun point land.
          </p>
          <p className="mt-3 text-sm">📞 +00 123-456-789</p>
          <p className="text-sm">📧 demo@example.com</p>
        </div>

        {/* Get to know us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get To Know Us</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Term & Policy</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Feedback</li>
            <li>FAQs</li>
            <li>Size Guide</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-4">Let's keep in touch</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full px-3 py-2 bg-gray-800 text-white outline-none"
            />
            <button className="bg-white text-black px-4">→</button>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 text-xl mt-4">
            <span>📘</span>
            <span>✖️</span>
            <span>📸</span>
            <span>📌</span>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-6">
        © 2025 Cosmika_Cosmetic02 — WordPress Theme by Avanam
      </div>
    </footer>
  );
};

export default Footer;
