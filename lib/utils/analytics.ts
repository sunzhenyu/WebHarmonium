// Google Analytics 事件追踪工具

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// 追踪按键点击
export const trackKeyPress = (key: string, note: string) => {
  trackEvent('key_press', {
    key_character: key,
    note_name: note,
  });
};

// 追踪控制使用
export const trackControlChange = (
  controlName: string,
  value: number | boolean
) => {
  trackEvent('control_change', {
    control_name: controlName,
    control_value: value,
  });
};

// 追踪练习时长
export const trackPracticeSession = (durationSeconds: number) => {
  trackEvent('practice_session', {
    duration_seconds: durationSeconds,
    duration_minutes: Math.round(durationSeconds / 60),
  });
};

// 追踪用户反馈
export const trackFeedback = (isPositive: boolean, comment?: string) => {
  trackEvent('user_feedback', {
    feedback_type: isPositive ? 'positive' : 'negative',
    comment: comment || '',
  });
};

// 追踪页面停留时间
export const trackTimeOnPage = (pageUrl: string, seconds: number) => {
  trackEvent('time_on_page', {
    page_url: pageUrl,
    seconds: seconds,
  });
};
