import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Web Harmonium Support and Feedback',
  description: 'Contact the Web Harmonium team. Send feedback, report bugs, or suggest new features for our free online harmonium simulator at web-harmonium.net.',
  alternates: { canonical: '/contact' },
  keywords: ['contact harmonium', 'harmonium support', 'harmonium feedback', 'report bug'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              We'd love to hear from you! Whether you have questions, feedback, or suggestions
              for improving Web Harmonium, please don't hesitate to reach out.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Get in Touch</h2>
            <p className="mb-4">
              For inquiries, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:kuyadan136@gmail.com" className="text-blue-600 hover:underline">
                kuyadan136@gmail.com
              </a>
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Feedback</h2>
            <p className="mb-4">
              Your feedback helps us improve Web Harmonium. Let us know about:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Feature requests</li>
              <li>Bug reports</li>
              <li>User experience improvements</li>
              <li>Browser compatibility issues</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Support</h2>
            <p className="mb-4">
              If you're experiencing technical issues:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Make sure you're using a modern browser (Chrome, Firefox, Safari, or Edge)</li>
              <li>Check that your browser allows audio playback</li>
              <li>Try clearing your browser cache and reloading the page</li>
              <li>Ensure your device volume is turned up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
