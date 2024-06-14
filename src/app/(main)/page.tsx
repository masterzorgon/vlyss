import { Newsletter } from '@/components/Newsletter'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'
import { Podcast } from '@/components/Podcast'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Newsletter />
      <Reviews />
      <Podcast />
    </main>
  );
};
