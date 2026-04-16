import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - Web Harmonium Support and Feedback',
  description: 'Contact the Web Harmonium team. Send feedback, report bugs, or suggest new features for our free online harmonium simulator at web-harmonium.net.',
  alternates: { canonical: '/contact' },
  keywords: ['contact harmonium', 'harmonium support', 'harmonium feedback', 'report bug'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <PageHeader titleKey="contact" />
          <ContactContent />
        </div>
      </div>
    </div>
  );
}
