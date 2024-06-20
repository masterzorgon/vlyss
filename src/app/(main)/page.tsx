import { Newsletter } from '@/components/Newsletter';
import { Hero } from '@/components/Hero';
import { Reviews } from '@/components/Reviews';
import { Podcast } from '@/components/Podcast';
import { Pricing } from '@/components/Pricing';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Pricing />
      <Newsletter />
      <Reviews />
      <Podcast />
    </main>
  );
};
