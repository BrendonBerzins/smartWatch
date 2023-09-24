import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import House from '@/components/House'
import Sobre from '@/components/Sobre'
import Modelos from '@/components/Modelos'
import Personalise from '@/components/Personalise'
export default function Home() {
  return (
    <main className='w-screen h-screen bg-[#e9e9e9]'>
      <Navbar />
      <House />
      <Sobre />
      <Modelos />
      <Personalise />
      <Footer />
    </main>
  )
}
