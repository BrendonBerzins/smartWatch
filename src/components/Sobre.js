import { PiCirclesThreeFill } from 'react-icons/pi'
import { BsSmartwatch } from 'react-icons/bs'
import { FaHeartbeat } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Sobre(){
    return(
        <section className='flex flex-col justify-center items-center h-[150vh] w-screen'>
        <h1 className='text-4xl p-5 mb-10'>Por que escolher Apple Watch?</h1>
        <div className='flex justify-center items-center gap-36'>
          <div className='flex flex-col gap-5'>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className='flex flex-col justify-center text-center gap-5 items-center w-36'>
            <PiCirclesThreeFill className='text-green-500 text-3xl'/>
              <h1>Combinações neutras em carbono</h1>
          </motion.div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} className='flex flex-col justify-center text-center gap-5 items-center w-36'>
            <BsSmartwatch className='text-3xl'/>
              <h1>Tela Retina Até 1000 nits de brilho</h1>
          </motion.div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.8}} className='flex flex-col justify-center text-center gap-5 items-center w-36'>
            <FaHeartbeat className='text-3xl'/>
              <h1>Notificações de frequência cardíaca alta e baixa Notificações de ritmo cardíaco irregular3 Notificações de preparo cardiovascular baixo</h1>
          </motion.div>
          </div>
          <motion.div initial={{ translateY: -100, opacity: 0}} whileInView={{  translateY: 0, opacity: 1 }} transition={{duration: 1}}><Image src='/PngItem_1341901.png' width={500} height={800}/></motion.div>
        </div>
      </section>
    )
}