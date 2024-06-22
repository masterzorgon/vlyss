import { Newsletter } from '@/components/Newsletter';
import { Hero } from '@/components/Hero';
import { Reviews } from '@/components/Reviews';
import { Podcast } from '@/components/Podcast';
import { Plans } from '@/components/Plans';
import { Offerings } from '@/components/Offerings';
import { MeetingCTA } from '@/components/MeetingCTA';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <MeetingCTA>
        <Hero />
        <Offerings />
        <Newsletter />
        <Plans />
        <Podcast />
        <Reviews />
      </MeetingCTA>
    </main>
  );
};
