import Featured from '@/components/Featured';
import Offer from '@/components/Offer';
import Slider from '@/components/Slider';


export default function Home() {
  return (
    <main className='text-blue-500 font-center'>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
