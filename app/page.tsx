import Link from 'next/link';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
