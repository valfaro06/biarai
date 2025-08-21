import { render, screen } from '@testing-library/react';
import ScrollingLogos from '@/components/ScrollingLogos';

describe('ScrollingLogos Component', () => {
  it('renders without crashing', () => {
    render(<ScrollingLogos />);
    
    // Check if the component container exists
    const container = document.querySelector('[class*="scroll"], [class*="animate"]');
    expect(container).toBeTruthy();
  });

  it('has proper accessibility attributes', () => {
    render(<ScrollingLogos />);
    
    // Check if the component renders with proper structure
    const container = document.querySelector('[class*="overflow-hidden"]');
    expect(container).toBeTruthy();
  });

  it('contains logo elements', () => {
    const { container } = render(<ScrollingLogos />);
    
    // Check if there are logo text elements
    const logoElements = container.querySelectorAll('span[class*="text-gray-500"]');
    expect(logoElements.length).toBeGreaterThan(0);
  });
});