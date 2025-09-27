const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/flixapaygroup',
      hoverColor: 'hover:text-blue-400',
      icon: (
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/flixapaygroup',
      hoverColor: 'hover:text-purple-500',
      icon: (
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/flixapaygroup',
      hoverColor: 'hover:text-blue-500',
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </>
      )
    },
    {
      name: 'Threads',
      href: 'https://www.threads.com/@flixapaygroup',
      hoverColor: 'hover:text-gray-300',
      icon: (
        <>
          <path d="M17 10.5c0-2.7-2.2-5-5-5s-5 2.3-5 5c0 4.5 5 7 5 7s5-2.5 5-7z" />
          <circle cx="12" cy="10.5" r="1.5" />
        </>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UC8aIhw1RRl-TQxlaRMfwFOA',
      hoverColor: 'hover:text-red-600',
      icon: (
        <>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2 29.94 29.94 0 0 0 0 11.16 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2 29.94 29.94 0 0 0 0-11.16z" />
          <polygon points="10 15 15 12 10 9 10 15" />
        </>
      )
    }
  ];

  const productLinks = [
    { name: 'Global Payments', href: '/services' },
    { name: 'Multi-Currency Accounts', href: '/services' },
    { name: 'Business Cards', href: '/services' },
    { name: 'Expense Management', href: '/services' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: 'mailto:hello@flixapaygroup.com' }
  ];

  const legalLinks = [
    { name: 'Cookies', href: '/cookies' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Security', href: '/security' }
  ];

  return (
    <footer className="bg-fintech-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/flixapay-full.png" alt="Flixapay" />
            </div>
            
            <p className="text-white/70 mb-6 max-w-lg text-sm leading-relaxed">
              FLIXAPAY GROUP LIMITED is a company registered in United Kingdom, 
              registered no.16384967. Registered address: 128 City Road, London, 
              United Kingdom, EC1V 2NX. FLIXAPAY GROUP LIMITED trading as 
              FLIXAPAY (UK) LIMITED is a company registered in United Kingdom, 
              registered no. 16406676. Registered address: 128 City Road, 
              London, United Kingdom, EC1V 2NX.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/70 ${social.hoverColor} transition-colors duration-200`}
                  aria-label={social.name}
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
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>

            {/* Contact Email */}
            <a
              className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
              href="mailto:hello@flixapaygroup.com"
            >
              hello@flixapaygroup.com
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Notice */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg">
          <p className="text-white/60 text-xs leading-relaxed">
            FLIXAPAY (UK) LIMITED Payment and Foreign Currency Exchange Services 
            are provided by Ebury Partners UK Limited. Ebury Partners UK Limited 
            (EPUK) is an Authorised Electronic Money Institution (Financial 
            Services Register No. 900797) and is licensed to provide payment 
            services including FX spots and FX Forwards for the commercial 
            purpose of the facilitation of payments for identifiable goods or 
            services and direct investments. Ebury Partners UK Limited is 
            registered with the Information Commissioner's Office, with 
            registration number: ZA345828.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Flixapaygroup. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-fintech-teal transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;