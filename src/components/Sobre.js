import { PiCirclesThreeFill } from 'react-icons/pi'
import { BsSmartwatch } from 'react-icons/bs'
import { FaHeartbeat } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Sobre(){
    return(
        <section id='sobre' className='flex flex-col justify-center items-center w-screen py-40'>
        <h1 className='text-4xl p-5 mb-10 text-center'>Por que escolher Apple Watch?</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-36'>
          <div className='flex flex-col gap-5 px-10'>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className='flex flex-col justify-center text-center gap-5 items-center w-56 md:w-36'>
            <PiCirclesThreeFill className='text-green-500 text-3xl'/>
              <h1 className='text-xl md:text-base'>Combinações neutras em carbono</h1>
          </motion.div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} className='flex flex-col justify-center text-center gap-5 items-center w-56 md:w-36'>
            <BsSmartwatch className='text-3xl'/>
              <h1 className='text-xl md:text-base'>Tela Retina Até 1000 nits de brilho</h1>
          </motion.div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.8}} className='flex flex-col justify-center text-center gap-5 items-center w-56 md:w-36'>
            <FaHeartbeat className='text-3xl'/>
              <h1 className='text-xl md:text-base'>Notificações de frequência cardíaca alta e baixa. Notificações de ritmo cardíaco irregular. Notificações de preparo cardiovascular baixo</h1>
          </motion.div>
          </div>
          <motion.div initial={{ translateY: -100, opacity: 0}} whileInView={{  translateY: 0, opacity: 1 }} transition={{duration: 1}}><Image className='px-5 pt-10 md:px-0 h-auto w-auto' src='/PngItem_1341901.png' priority={true} alt='' width={400} height={800}/></motion.div>
        </div>
      </section>
    )
}