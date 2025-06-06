const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-fintech-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/flixapay-full.png" alt="" />
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              To revolutionize financial access by bridging the gap between
              underserved and developed markets with cutting-edge digital
              banking solutions.
            </p>
            <div className="flex space-x-4">
              {/* Facebook 
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-white/70 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              */}

              {/* Twitter */}
              <a
                href="https://x.com/flixapaygroup"
                target="_blank"
                className="text-white/70 hover:text-blue-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/flixapaygroup"
                target="_blank"
                className="text-white/70 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/flixapaygroup"
                target="_blank"
                className="text-white/70 hover:text-blue-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.com/@flixapaygroup"
                target="_blank"
                className="text-white/70 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 10.5c0-2.7-2.2-5-5-5s-5 2.3-5 5c0 4.5 5 7 5 7s5-2.5 5-7z" />
                  <circle cx="12" cy="10.5" r="1.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UC8aIhw1RRl-TQxlaRMfwFOA"
                target="_blank"
                className="text-white/70 hover:text-red-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2 29.94 29.94 0 0 0 0 11.16 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2 29.94 29.94 0 0 0 0-11.16z" />
                  <polygon points="10 15 15 12 10 9 10 15" />
                </svg>
              </a>
            </div>

            <div className="pt-3 px-2">
              <a
                className="text-white/70"
                href="mailto:hello@flixapaygroup.com"
              >
                {" "}
                hello@flixapaygroup.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Global Payments
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Multi-Currency Accounts
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Business Cards
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Expense Management
                </a>
              </li>
              
            </ul>
          </div>

          {/*
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://blog.flixapaygroup.com"
                  target="_blank"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="https://help.flixapaygroup.com"
                  target="_blank"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  About Us
                </a>
              </li>

               <li>
                <a
                  href="mailto:hello@flixapaygroup.com"
                  className="text-white/70 hover:text-fintech-teal transition-colors"
                >
                  Contact
                </a>
              </li>
             </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Flixapaygroup. All rights reserved.
          </p>
          <div className="flex space-x-6 pb-4">
            <a
              href="/cookies"
              className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
            >
              Cookies
            </a>
            <a
              href="/terms"
              className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="/security"
              className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
