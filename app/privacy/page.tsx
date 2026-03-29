import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Web Harmonium',
  description: 'Privacy policy for Web Harmonium online harmonium simulator. Learn how we protect your data and use cookies.',
  keywords: ['privacy policy', 'data protection', 'cookies', 'user privacy'],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Last updated: March 29, 2026</strong>
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p className="mb-4">
              Web Harmonium is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Local Storage:</strong> Your settings (volume, transpose, octave) are stored
                locally in your browser using localStorage. This data never leaves your device.
              </li>
              <li>
                <strong>Analytics:</strong> We may use analytics services to understand how users
                interact with our application. This includes anonymous usage data such as page views
                and feature usage.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies</h2>
            <p className="mb-4">
              We may use cookies for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Analytics and performance monitoring</li>
              <li>Advertising (Google AdSense)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Third-Party Services</h2>
            <p className="mb-4">
              We may use third-party services including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Google AdSense:</strong> We use Google AdSense to display advertisements.
                Google may use cookies to serve ads based on your prior visits to our website or
                other websites. You can opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">
                  Google Ads Settings
                </a>.
              </li>
              <li>
                <strong>Hosting Services:</strong> Our application is hosted on Vercel, which may
                collect standard server logs.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
            <p className="mb-4">
              Since all your settings are stored locally in your browser, we do not transmit or
              store any personal data on our servers. Your data remains under your control.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Children's Privacy</h2>
            <p className="mb-4">
              Our service is available to users of all ages. We do not knowingly collect personal
              information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this privacy policy, please{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
