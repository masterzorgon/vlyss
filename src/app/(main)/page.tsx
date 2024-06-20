import { Newsletter } from '@/components/Newsletter';
import { Hero } from '@/components/Hero';
import { Reviews } from '@/components/Reviews';
import { Podcast } from '@/components/Podcast';
import { Pricing } from '@/components/Pricing';
import { Offerings } from '@/components/Offerings';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Offerings />
      <Newsletter />
      <Pricing />
      <Podcast />
      <Reviews />
    </main>
  );
};
