import { FaApple } from 'react-icons/fa'

export default function Navbar(){
    return(
        <div className="w-screen h-14 bg-[#e9e9e9] flex justify-center items-center text-[#6d6d6d] border-y border-[#6d6d6d]">
            <FaApple className='text-2xl mr-5'/>
            <div className='flex'>
                <ul className='flex gap-10'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Sobre</a></li>
                    <li><a href='/'>Modelos</a></li>
                    <li><a href='/'>Comprar</a></li>
                </ul>
            </div>
        </div>
    )
}