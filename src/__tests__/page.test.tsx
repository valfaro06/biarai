import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';
import { trackNavigation, trackContactEvent } from '@/lib/analytics';

// Mock the analytics functions
jest.mock('@/lib/analytics', () => ({
  trackNavigation: jest.fn(),
  trackContactEvent: jest.fn(),
}));

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main heading', () => {
    render(<Home />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('De ideas a resultados reales para Pymes en México');
  });

  it('renders the main description', () => {
    render(<Home />);
    
    const description = screen.getByText(/Aplicamos el rigor de grandes consultoras/);
    expect(description).toBeInTheDocument();
  });

  it('renders contact and services buttons', () => {
    render(<Home />);
    
    const contactButton = screen.getByRole('link', { name: /agenda una reunión/i });
    const servicesButton = screen.getByRole('link', { name: /ver servicios/i });
    
    expect(contactButton).toBeInTheDocument();
    expect(servicesButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', '/contacto');
    expect(servicesButton).toHaveAttribute('href', '/servicios');
  });

  it('renders service navigation links', () => {
    render(<Home />);
    
    const dealAdvisoryLink = screen.getByRole('link', { name: /Deal Advisory/i });
    const mercadosLink = screen.getByRole('link', { name: /Nuevos Mercados/i });
    const operacionesLink = screen.getByRole('link', { name: /Mejoras y TI/i });
    const industriasLink = screen.getByRole('link', { name: /Industrias/i });
    
    expect(dealAdvisoryLink).toBeInTheDocument();
    expect(mercadosLink).toBeInTheDocument();
    expect(operacionesLink).toBeInTheDocument();
    expect(industriasLink).toBeInTheDocument();
  });

  it('tracks analytics when contact button is clicked', () => {
    render(<Home />);
    
    const contactButton = screen.getByRole('link', { name: /agenda una reunión/i });
    fireEvent.click(contactButton);
    
    expect(trackContactEvent).toHaveBeenCalledWith('click_schedule', 'hero_button');
  });

  it('tracks analytics when services button is clicked', () => {
    render(<Home />);
    
    const servicesButton = screen.getByRole('link', { name: /ver servicios/i });
    fireEvent.click(servicesButton);
    
    expect(trackNavigation).toHaveBeenCalledWith('/servicios', 'hero');
  });

  it('renders the globe component', () => {
    render(<Home />);
    
    // Since the Globe is dynamically imported and mocked, we check for the dynamic component
    const globeWrapper = screen.getByTestId('dynamic-component');
    expect(globeWrapper).toBeInTheDocument();
  });

  it('renders the scrolling logos component', () => {
    render(<Home />);
    
    // Check if ScrollingLogos component is rendered
    // This might need adjustment based on the actual component structure
    const logosSection = document.querySelector('[class*="scroll"]');
    expect(logosSection).toBeTruthy();
  });
});