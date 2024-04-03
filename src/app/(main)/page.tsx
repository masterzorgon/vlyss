import { Newsletter } from '@/components/Newsletter'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'
import { WeeklyFeature } from '@/components/WeeklyFeature'
import { OurStory } from '@/components/OurStory'
import { SectionBreak } from '@/components/SectionBreak'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <SectionBreak 
        className="-mt-36 lg:-mt-72 bottom-6 sm:bottom-0 border-2 md:top-10 md:overflow-visible border-red-500"
        subClassOne="bg-transparent border-2 border-green-500"
        subClassTwo="bg-cyan-800 border-2 border-blue-500"
        type="teal"
      />
      <WeeklyFeature />
      <SectionBreak />
      <OurStory />
      <SectionBreak rotate />
      <Newsletter />
      <SectionBreak />
      <Reviews />
    </main>
  );
};
