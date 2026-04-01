'use client';

import { useState } from 'react';
import { trackFeedback } from '@/lib/utils/analytics';

export default function FeedbackWidget() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | null>(null);
  const [comment, setComment] = useState('');

  const handleFeedback = (isPositive: boolean) => {
    setFeedbackType(isPositive ? 'positive' : 'negative');
    setShowForm(true);
    trackFeedback(isPositive);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackType) {
      trackFeedback(feedbackType === 'positive', comment);
      setSubmitted(true);
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
        setComment('');
        setFeedbackType(null);
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
        感谢您的反馈！
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-xl p-4 max-w-sm border border-gray-200">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h3 className="font-semibold mb-2 text-gray-900">
          {feedbackType === 'positive' ? '很高兴您喜欢！' : '我们可以如何改进？'}
        </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="告诉我们您的想法..."
            className="w-full border border-gray-300 rounded p-2 text-sm mb-2 min-h-20"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            提交反馈
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
      <p className="text-sm text-gray-700 mb-3 font-medium">这个工具有用吗？</p>
      <div className="flex gap-2">
        <button
          onClick={() => handleFeedback(true)}
          className="flex-1 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors text-2xl"
          title="有用"
        >
          👍
        </button>
        <button
          onClick={() => handleFeedback(false)}
          className="flex-1 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors text-2xl"
          title="不太有用"
        >
          👎
        </button>
      </div>
    </div>
  );
}
