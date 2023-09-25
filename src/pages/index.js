import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import House from '@/components/House'
import Sobre from '@/components/Sobre'
import Modelos from '@/components/Modelos'
import Personalise from '@/components/Personalise'
import Head from 'next/head'
export default function Home() {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/apple-512.png"/>
      <title>Smart Watch | Apple</title>
    </Head>
    <main className='w-screen h-screen bg-[#e9e9e9]'>
      <Navbar />
      <House />
      <Sobre />
      <Modelos />
      <Personalise />
      <Footer />
    </main>
    </>
  )
}
