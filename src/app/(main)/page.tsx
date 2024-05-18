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
        className="-mt-40 lg:-mt-72 bottom-0 md:top-10 md:overflow-visible"
        subClassOne="bg-transparent"
        subClassTwo="bg-cyan-800"
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
