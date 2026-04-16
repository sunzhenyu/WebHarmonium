import type { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';
import PageHeader from '@/components/PageHeader';
import TutorialContent from '@/components/TutorialContent';

export const metadata: Metadata = {
  title: 'How to Play Harmonium - Complete Tutorial Guide | Web Harmonium',
  description: 'Learn how to play harmonium online — step-by-step guide for beginners. Covers keyboard layout, sargam scales, ragas, popular songs, and practice exercises.',
  alternates: { canonical: '/tutorial' },
  keywords: ['harmonium tutorial', 'learn harmonium', 'how to play harmonium', 'harmonium lessons', 'harmonium for beginners', 'online harmonium course'],
};

export default function TutorialPage() {
  const howToSteps = [
    {
      '@type': 'HowToStep',
      name: 'Load the Harmonium',
      text: 'Click on Play in the navigation menu and click the Load Module button to initialize the audio engine.',
    },
    {
      '@type': 'HowToStep',
      name: 'Learn the Keyboard Layout',
      text: 'White keys are mapped to ` q w e r t y u i o p [ ] \\ and black keys to 1 2 4 5 7 8 9 - =',
    },
    {
      '@type': 'HowToStep',
      name: 'Practice the C Major Scale',
      text: 'Press keys e-r-t-y-u-i-o-p in order to play the C major scale (Sa Re Ga Ma Pa Dha Ni Sa).',
    },
    {
      '@type': 'HowToStep',
      name: 'Adjust Controls',
      text: 'Use volume, transpose, and octave controls to customize the sound to your preference.',
    },
    {
      '@type': 'HowToStep',
      name: 'Practice Simple Songs',
      text: 'Start with simple songs like Twinkle Twinkle Little Star or Happy Birthday to build muscle memory.',
    },
  ];

  return (
    <div>
      <StructuredData
        type="HowTo"
        data={{
          name: 'How to Play Harmonium Online',
          description: 'Complete step-by-step guide to learning harmonium online for beginners',
          steps: howToSteps,
        }}
      />
      <div className="min-h-screen bg-stone-50">
        <div className="max-w-4xl mx-auto p-8">
          <PageHeader titleKey="tutorial" />
          <TutorialContent />
        </div>
      </div>
    </div>
  );
}
