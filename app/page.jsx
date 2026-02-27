import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesMarquee from '../components/ServicesMarquee';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhoWeAreSection from '../components/WhoWeAreSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesMarquee />
        <WhatWeDoSection />
        <WhoWeAreSection />
      </main>
    </>
  );
}
