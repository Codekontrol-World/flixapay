
const SecurityPage = () => {
  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Security Policy</h1>
        <p className="mb-4">
          At Flixapaygroup, your data security is our top priority. This Security Policy outlines the measures we take to protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Encryption</h2>
        <p className="mb-4">
          All sensitive data is encrypted in transit using TLS and at rest using industry-standard encryption protocols.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Access Control</h2>
        <p className="mb-4">
          We enforce strict access control policies, ensuring only authorized personnel have access to your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Monitoring and Auditing</h2>
        <p className="mb-4">
          Our systems are continuously monitored for suspicious activity and regularly audited to ensure compliance with our security standards.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Incident Response</h2>
        <p className="mb-4">
          We maintain an incident response plan to address any potential security breaches swiftly and effectively.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Responsibility</h2>
        <p className="mb-4">
          We encourage users to choose strong passwords and keep them confidential. Please notify us immediately if you suspect any unauthorized activity.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: May 2025</p>
      </main>
    </>
  );
};

export default SecurityPage;