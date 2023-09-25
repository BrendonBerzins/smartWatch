import { motion } from "framer-motion"
import Image from "next/image"
export default function House(){
    return(
        <section id='home'className='flex flex-col md:flex md:flex-row gap-20 justify-center items-center mt-28'>
        <div className='w-[80%] md:w-[40%] md:pl-10'>
          <Image className='w-auto h-auto' src="/logo_se.png" priority={true} width={200} height={80} alt=''/>
          <motion.div initial={{translateX: -100, opacity: 0}} whileInView={{translateX: 0, opacity: 1}} transition={{duration: 0.5}}>
          <h4 className='text-[#1c1c1e] text-5xl font-bold pb-5'>Para amar cada segundo.</h4>
          </motion.div>
          <motion.div initial={{translateX: -100, opacity: 0}} whileInView={{translateX: 0, opacity: 1}} transition={{duration: 0.8}}>
          <p className='text-xl text-[#1c1c1e]'>Três cores estilosas de caixa. Sensores poderosos com informacões sobre a sua saúde e boa forma.
            Recursos de segurança inovadores. Opções covenientes para se conectar. E um precessador de dois núcleos
            mais rápido para um desempenho superior. O Apple Watch SE é cheio de possibilidades ao  alcance do seu pulso.
          </p>
          </motion.div>
        </div>
        <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{ opacity: 1, scale: 1}} transition={{duration: 0.5}}><Image className='px-10 md:px-0' src="/smartWatch-black.png" alt=''   width={400} height={400}/></motion.div>
          </section>
    )
}