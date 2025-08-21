// Analytics utilities for tracking user interactions and events
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { action, category, label, value });
  }
};

// Track interactions with the globe
export const trackGlobeInteraction = (interaction: string, country?: string) => {
  trackEvent({
    action: interaction,
    category: 'Globe',
    label: country,
  });
};

// Track navigation events
export const trackNavigation = (page: string, source?: string) => {
  trackEvent({
    action: 'navigate',
    category: 'Navigation',
    label: `${source ? `${source} -> ` : ''}${page}`,
  });
};

// Track contact form interactions
export const trackContactEvent = (action: string, method?: string) => {
  trackEvent({
    action: action,
    category: 'Contact',
    label: method,
  });
};

// Track service page visits
export const trackServiceView = (service: string) => {
  trackEvent({
    action: 'view_service',
    category: 'Services',
    label: service,
  });
};

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}