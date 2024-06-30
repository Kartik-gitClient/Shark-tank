import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            CleansWave is committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website www.CleansWave.com,
            including any other media form, media channel, mobile website, or mobile application related or
            connected thereto (collectively, the “Site”).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on
            the Site includes:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Your personal identification information (name, email, etc.)</li>
            <li>Your contact information (billing address, shipping address, etc.)</li>
            <li>Your financial information (credit card number, etc.)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
          <p>
            We use the information we collect in order to:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Email: info@CleansWave.com</li>
            <li>Phone: +91 6969696969</li>
            <li>Address: 24 North Tower, 7Th Sector , Indore</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Terms of Service</h2>
          <p>
            By using our website, you agree to comply with and be bound by our Terms of Service. Please read
            these terms carefully before accessing or using our website. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site.
          </p>
          <p>
            Our Terms of Service can be found <a href="/terms-of-service" className="text-blue-500 hover:underline">here</a>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
