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
    
    // Check for aria-hidden on decorative elements
    const decorativeElements = document.querySelectorAll('[aria-hidden="true"]');
    expect(decorativeElements.length).toBeGreaterThan(0);
  });

  it('contains logo elements', () => {
    const { container } = render(<ScrollingLogos />);
    
    // Check if there are elements that look like logos (images or styled divs)
    const logoElements = container.querySelectorAll('img, div[class*="w-"], div[class*="h-"]');
    expect(logoElements.length).toBeGreaterThan(0);
  });
});