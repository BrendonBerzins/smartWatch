import { motion } from "framer-motion"
import Image from "next/image"
export default function House(){
    return(
        <section className='flex gap-20 justify-center items-center mt-28'>
        <div className='w-[40%]'>
          <Image src="/logo_se.png" width={200} height={80}/>
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
        <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{ opacity: 1, scale: 1}} transition={{duration: 0.5}}><Image src="/smartWatch-black.png" width={400} height={400}/></motion.div>
          </section>
    )
}