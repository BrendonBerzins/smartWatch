import { FaApple } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Navbar(){
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full glass fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="#home">
              <FaApple className='text-black text-xl'/>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose />
                  ) : (
                    <GiHamburgerMenu />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className=" md:h-auto items-center flex flex-col gap-10 justify-center pb-10 md:flex md:flex-row md:pb-0">
                <motion.li initial={{scale: 0.5}} whileInView={{scale: 1}} transition={{delay: .1}} className="text-md text-black md: text-center md:hover:text-slate-600 md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </motion.li>
                <motion.li initial={{scale: 0.5}} whileInView={{scale: 1}} transition={{delay: .2}} className="text-md text-black  text-center  md:hover:text-slate-600 md:hover:bg-transparent">
                  <Link href="#sobre" onClick={() => setNavbar(!navbar)}>
                    Sobre
                  </Link>
                </motion.li>
                <motion.li initial={{scale: 0.5}} whileInView={{scale: 1}} transition={{delay: .3}} className="text-md text-black  text-center  md:hover:text-slate-600 md:hover:bg-transparent">
                  <Link href="#modelos" onClick={() => setNavbar(!navbar)}>
                    Modelos
                  </Link>
                </motion.li>
                <motion.li initial={{scale: 0.5}} whileInView={{scale: 1}} transition={{delay: .4}} className="text-md text-black  text-center  md:hover:text-slate-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                  <motion.button whileTap={{scale: 0.7}}className='bg-sky-500 text-white p-2 rounded-full'>Comprar</motion.button>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

