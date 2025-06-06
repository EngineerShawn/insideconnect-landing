// Filename: components.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Import all components
import HeroSection from '../src/components/HeroSection';
import FeaturesSection from '../src/components/FeaturesSection';
import PricingSection from '../src/components/PricingSection';
import TestimonialsSection from '../src/components/TestimonialsSection';
import FAQSection from '../src/components/FAQSection';
import Footer from '../src/components/Footer';

// HeroSection tests
describe('HeroSection', () => {
  it('renders headline and CTA button', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

// FeaturesSection tests
describe('FeaturesSection', () => {
  it('renders at least one feature block', () => {
    render(<FeaturesSection />);
    const featureHeadings = screen.getAllByRole('heading');
    expect(featureHeadings.length).toBeGreaterThan(0);
  });
});

// PricingSection tests
describe('PricingSection', () => {
  it('renders pricing plans and CTA buttons', () => {
    render(<PricingSection />);
    expect(screen.getAllByRole('heading')).not.toHaveLength(0);
    expect(screen.getAllByRole('button')).not.toHaveLength(0);
  });
});

// TestimonialsSection tests
describe('TestimonialsSection', () => {
  it('renders testimonials with quotes and names', () => {
    render(<TestimonialsSection />);
    expect(screen.getAllByText(/".*"/)).not.toHaveLength(0);
  });
});

// FAQSection tests
describe('FAQSection', () => {
  it('renders FAQ questions and answers', () => {
    render(<FAQSection />);
    const questions = screen.getAllByRole('heading');
    expect(questions.length).toBeGreaterThan(0);
  });
});

// Footer tests
describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });
});
