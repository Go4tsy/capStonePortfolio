// Analytics utility for tracking events and page views
// Supports Google Analytics (ReactGA) and Plausible (if added)

// Import ReactGA if using Google Analytics
// import ReactGA from 'react-ga';

// Optionally import Plausible if you add it
// import plausible from 'plausible-tracker';

// Initialize analytics here if needed
// ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
// const plausibleInstance = plausible();

export function trackPageView(path) {
  // Google Analytics
  // ReactGA.pageview(path);

  // Plausible
  // plausibleInstance.trackPageview();

  // Add more analytics providers as needed
}

export function trackResumeDownload() {
  // Google Analytics custom event
  // ReactGA.event({ category: 'Resume', action: 'Download' });

  // Plausible custom event
  // plausibleInstance.trackEvent('Resume Download');

  // Add more analytics providers as needed
}

// Add more event tracking functions as needed 