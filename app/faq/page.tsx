import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Web Harmonium',
  description: 'Answers to common questions about Web Harmonium. Learn about keyboard controls, browser support, transpose, Shruti Box, ragas, and troubleshooting tips.',
  alternates: { canonical: '/faq' },
  keywords: ['harmonium faq', 'harmonium help', 'harmonium questions', 'online harmonium support'],
};

export default function FAQPage() {
  const faqData = [
    {
      question: "What is Web Harmonium?",
      answer: "Web Harmonium is a free online harmonium simulator that runs in your web browser. You can play it using your computer keyboard or by clicking the virtual keys with your mouse."
    },
    {
      question: "Do I need to download or install anything?",
      answer: "No! Web Harmonium works entirely in your browser. Just visit the site, click 'Load Module', and start playing. No downloads, no installations, no sign-ups required."
    },
    {
      question: "Which browsers are supported?",
      answer: "Web Harmonium works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience."
    },
    {
      question: "How do I play notes?",
      answer: "Use your keyboard keys: ` q w e r t y u i o p [ ] \\ for white keys, and 1 2 4 5 7 8 9 - = for black keys. You can also click or tap the virtual keyboard on screen."
    },
    {
      question: "What are the keyboard shortcuts?",
      answer: "Press Ctrl+Alt+Left/Right arrows to change transpose, and Ctrl+Alt+Up/Down arrows to change octave. This lets you adjust settings without using your mouse."
    },
    {
      question: "Can I play chords?",
      answer: "Yes! You can press multiple keys simultaneously to play chords, just like on a real harmonium."
    },
    {
      question: "What is transpose and how do I use it?",
      answer: "Transpose shifts all notes up or down by semitones (half steps). Use it to match your vocal range or play in different keys. Range is -11 to +11 semitones."
    },
    {
      question: "What are Reeds?",
      answer: "Reeds control the richness of the sound. Traditional harmoniums have multiple reeds per note. Increasing reeds (1-4) creates a fuller, chorus-like effect."
    },
    {
      question: "Why is there no sound?",
      answer: "Make sure you clicked 'Load Module' first. Check that your device volume is up and your browser allows audio playback. Try refreshing the page if issues persist."
    },
    {
      question: "Can I use this on mobile?",
      answer: "Yes! Web Harmonium works on mobile devices. Tap the virtual keyboard to play notes. Physical keyboard shortcuts only work on computers."
    },
    {
      question: "Can I connect a MIDI keyboard?",
      answer: "MIDI keyboard support is planned for a future update. Currently, you can only use your computer keyboard or click/tap the virtual keys."
    },
    {
      question: "Can I record my playing?",
      answer: "Recording functionality is planned for a future update. For now, you can use external screen recording software to capture your performances."
    },
    {
      question: "What is Sargam?",
      answer: "Sargam is the Indian music notation system: Sa Re Ga Ma Pa Dha Ni (equivalent to Do Re Mi Fa Sol La Ti in Western music). You'll see these labels on the keyboard."
    },
    {
      question: "How do I learn to play harmonium?",
      answer: "Check out our Tutorial page for step-by-step lessons, song tutorials, and Raga guides. Start with simple scales and progress to songs."
    },
    {
      question: "Is Web Harmonium free?",
      answer: "Yes, completely free! No subscriptions, no hidden fees, no ads blocking your playing experience."
    },
  ];

  return (
    <div>
      <StructuredData
        type="FAQPage"
        data={{
          questions: faqData.map(item => ({
            question: item.question,
            answer: item.answer
          }))
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <PageHeader titleKey="faq" />

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h2>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Still have questions?</h3>
              <p className="text-gray-700">
                Visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact page</Link> to get in touch with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
