import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


const TermsPage = () => {
  return (
    <div className="font-futura">
      <Header />
      <div className="pt-64 md:pt-40 lg:pt-48">
 
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          These Terms and Conditions ("Terms") govern your access to and use of the Flixapay website and services. By using our services, you agree to comply with these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, and data on this site are the property of Flixapaygroup or its licensors and are protected by intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential damages arising from your use of our site or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. Continued use of the site constitutes acceptance of the updated Terms.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: May 2025</p>
      </main>
         </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
