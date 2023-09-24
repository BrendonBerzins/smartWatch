import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
export default function Modelos(){

    const [meuValor, alterarMeuValor] = useState('white')
    const url = '/smartWatch-'

    function renderizarBotao(valor){
      return(
        <button className='w-5 h-5 bg-slate-100 rounded-full' onClick={()=>{
          alterarMeuValor(valor)
          console.log(valor)
        }}></button>
      )
    }
    return(
        <section className='flex flex-col gap-10 justify-center items-center w-screen h-[150vh]'>
        <h1 className='text-[#1c1c1e] text-3xl font-bold pb-5 '>Qual é o Apple Watch combina com você?</h1>
      <div className='flex flex-col justify-center items-center text-center'>
      <motion.div initial={{ scale: .8}} whileHover={{ scale: 1, rotate: 10}}> <Image src={`${url}`+`${meuValor}.png`} width={400} height={800} alt="smartWatch"/></motion.div>
          <div className="flex gap-5 ">
            <div className="bg-slate-950 rounded-full h-7 w-7 flex justify-center items-center">{renderizarBotao('black')}</div>
            <div className="bg-pink-500 rounded-full h-7 w-7 flex justify-center items-center">{renderizarBotao('pink')}</div>
            <div className="bg-slate-300 rounded-full h-7 w-7 flex justify-center items-center">{renderizarBotao('white')}</div>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center mt-10 w-52'>
            <h1 className='text-[#1c1c1e] text-2xl font-bold'>Apple Watch {meuValor}</h1>
          <h2>Tudo que é essencial ao alcance do seu pulso.</h2>
          <p>A partir de R$ 3.299</p>
          <button className='bg-sky-500 text-white p-2 rounded-full'>Comprar</button>
          <button className='text-sky-500'>Saiba Mais</button>
          </div>
      </div>
      </section>
    )
}