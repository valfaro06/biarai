import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
  usePathname: () => '/',
}));

// Mock analytics
jest.mock('@/lib/analytics', () => ({
  trackPageView: jest.fn(),
  trackEvent: jest.fn(),
  trackGlobeInteraction: jest.fn(),
  trackNavigation: jest.fn(),
  trackContactEvent: jest.fn(),
  trackServiceView: jest.fn(),
}));

// Mock Three.js for globe components
jest.mock('three', () => ({
  ...jest.requireActual('three'),
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    setPixelRatio: jest.fn(),
    setClearColor: jest.fn(),
    domElement: document.createElement('canvas'),
  })),
}));

// Mock @react-three/fiber
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="mock-canvas">{children}</div>,
  useThree: () => ({
    gl: {
      setPixelRatio: jest.fn(),
      setSize: jest.fn(),
      setClearColor: jest.fn(),
      antialias: false,
      powerPreference: 'high-performance',
    },
    size: { width: 800, height: 600 },
  }),
  extend: jest.fn(),
}));

// Mock dynamic imports
jest.mock('next/dynamic', () => {
  return function dynamic(importFunc, options = {}) {
    const DynamicComponent = (props) => {
      if (options.loading) {
        return options.loading();
      }
      return <div data-testid="dynamic-component">Dynamic Component</div>;
    };
    
    return DynamicComponent;
  };
});

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Suppress console warnings for tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};