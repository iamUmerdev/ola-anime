import React from "react";
import {
  FaShieldAlt,
  FaUser,
  FaLock,
  FaGlobe,
  FaLink,
  FaUserShield,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-10 text-center">
          Last Updated: [Insert Date]
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaUser className="mr-2" /> 1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-6">
            We collect personal data in various ways, including when you visit
            our Website, fill out a form, comment on posts, or subscribe to our
            blog. The types of information we collect include:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              Personal Identification Information (Name, Email Address, etc.)
            </li>
            <li>
              Non-personal Identification Information (IP address, browser type,
              etc.)
            </li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaSyncAlt className="mr-2" /> 2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-6">We use your data to:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide services and content you request</li>
            <li>Improve the Website and user experience</li>
            <li>Send periodic emails (if opted-in)</li>
            <li>Moderate and respond to comments</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaShieldAlt className="mr-2" /> 3. Sharing Your Information
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell or rent your personal information. However, we may
            share your data with:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Trusted third-party service providers</li>
            <li>Legal authorities when required by law</li>
            <li>
              As part of business transfers (e.g., mergers or acquisitions)
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaLock className="mr-2" /> 4. Your Data Protection Rights
          </h2>
          <p className="text-gray-600">
            Depending on your location, you may have rights like accessing,
            correcting, erasing, or restricting the processing of your personal
            data. Contact us at{" "}
            <span className="font-medium text-gray-800">
              [Your Contact Email]
            </span>{" "}
            to exercise your rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaUserShield className="mr-2" /> 5. Security of Your Information
          </h2>
          <p className="text-gray-600">
            We take reasonable steps to protect your data, but no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaLink className="mr-2" /> 6. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our Website may contain links to third-party websites. We are not
            responsible for their content or privacy practices. Review their
            privacy policies before providing any information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaGlobe className="mr-2" /> 7. Children's Privacy
          </h2>
          <p className="text-gray-600">
            We do not knowingly collect data from children under 13. If you
            believe we have, please contact us immediately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaSyncAlt className="mr-2" /> 8. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this policy from time to time. Check this page for
            updates. Continued use of the Website indicates your acceptance of
            the policy changes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-gray-700">
            <FaEnvelope className="mr-2" /> 9. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Email: [Your Email Address]</li>
            <li>Phone: [Your Phone Number]</li>
            <li>Address: [Your Business Address]</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
