export const translations = {
  en: {
    // Sargam labels (Latin script)
    sargam: {
      C: 'Sa',
      'C#': 'Re♭',
      D: 'Re',
      'D#': 'Ga♭',
      E: 'Ga',
      F: 'Ma',
      'F#': 'Ma♯',
      G: 'Pa',
      'G#': 'Dha♭',
      A: 'Dha',
      'A#': 'Ni♭',
      B: 'Ni',
    },
    // Controls
    controls: {
      volume: 'Volume',
      transpose: 'Transpose',
      octave: 'Octave',
      reeds: 'Reeds',
      reverb: 'Reverb',
      drone: 'Drone',
    },
    // Common UI
    ui: {
      loading: 'Loading harmonium...',
      quickStart: 'Quick Start:',
      quickStartTip: 'Click the keyboard below or press keys',
      onYourKeyboard: 'on your computer keyboard to play',
    },
    // Feedback
    feedback: {
      useful: 'Is this tool useful?',
      thanks: 'Thank you for your feedback!',
      glad: 'Glad you like it!',
      improve: 'How can we improve?',
      placeholder: 'Tell us your thoughts...',
      submit: 'Submit Feedback',
    },
  },
  hi: {
    // Sargam labels (Devanagari script)
    sargam: {
      C: 'सा',
      'C#': 'रे♭',
      D: 'रे',
      'D#': 'ग♭',
      E: 'ग',
      F: 'म',
      'F#': 'म♯',
      G: 'प',
      'G#': 'ध♭',
      A: 'ध',
      'A#': 'नि♭',
      B: 'नि',
    },
    // Controls
    controls: {
      volume: 'वॉल्यूम',
      transpose: 'ट्रांसपोज़',
      octave: 'सप्तक',
      reeds: 'रीड्स',
      reverb: 'रीवर्ब',
      drone: 'ड्रोन',
    },
    // Common UI
    ui: {
      loading: 'हारमोनियम लोड हो रहा है...',
      quickStart: 'शुरू करें:',
      quickStartTip: 'नीचे कीबोर्ड पर क्लिक करें या कुंजी दबाएं',
      onYourKeyboard: 'अपने कंप्यूटर कीबोर्ड पर बजाने के लिए',
    },
    // Feedback
    feedback: {
      useful: 'क्या यह उपकरण उपयोगी है?',
      thanks: 'आपकी प्रतिक्रिया के लिए धन्यवाद!',
      glad: 'खुशी है कि आपको पसंद आया!',
      improve: 'हम कैसे सुधार कर सकते हैं?',
      placeholder: 'हमें अपने विचार बताएं...',
      submit: 'प्रतिक्रिया सबमिट करें',
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
