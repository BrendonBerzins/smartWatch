import { FaApple } from "react-icons/fa";
import Link from "next/link";
export default function Footer(){
    return(
        <div className='flex flex-col justify-center items-center'>
        <hr className="border-spacing-1 w-[80%] border-[#6d6d6d]"/>
            <div className='flex justify-center items-center mt-5'>
                <FaApple className='text-3xl text-[#6d6d6d]'/> 
                <h1 className="text-2xl">Watch SE</h1>
            </div>
        <footer className="flex flex-wrap gap-10  p-20">
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Descobrir e Comprar</h1>
                <li><Link href='/'>Loja</Link></li>
                <li><Link href='/'>Mac</Link></li>
                <li><Link href='/'>iPad</Link></li>
                <li><Link href='/'>iPhone</Link></li>
                <li><Link href='/'>Airpods</Link></li>
                <li><Link href='/'>Acessorios</Link></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Sua conta</h1>
                <li><Link href='/'>Gerenciar seu ID Apple</Link></li>
                <li><Link href='/'>Conta da Apple Store</Link></li>
                <li><Link href='/'>iCloud.com</Link></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Apple Store</h1>
                <li><Link href='/'>Encontre uma loja</Link></li>
                <li><Link href='/'>Genius Bar</Link></li>
                <li><Link href='/'>Today at Apple</Link></li>
                <li><Link href='/'>Apple Camp</Link></li>
                <li><Link href='/'>App Apple Store</Link></li>
                <li><Link href='/'>Financiamento</Link></li>
                <li><Link href='/'>Status do seu pedido</Link></li>
                <li><Link href='/'>Ajuda para comprar</Link></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Entretenimento</h1>
                <li><Link href='/'>Apple One</Link></li>
                <li><Link href='/'>Apple TV+</Link></li>
                <li><Link href='/'>App Store</Link></li>
                <li><Link href='/'>Apple Books</Link></li>
                <li><Link href='/'>Apple Podcasts</Link></li>
                <li><Link href='/'>Apple Fitness+</Link></li>
                <li><Link href='/'>Apple Arcade</Link></li>
                <li><Link href='/'>Apple Music</Link></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Sobre Link Apple</h1>
                <li><Link href='/'>Contato</Link></li>
                <li><Link href='/'>Eventos</Link></li>
                <li><Link href='/'>Ética e Compliance</Link></li>
                <li><Link href='/'>Investidores</Link></li>
                <li><Link href='/'>Oportunidades de Carreira</Link></li>
                <li><Link href='/'>Liderança da Apple</Link></li>
                <li><Link href='/'>Newsroom</Link></li>
            </ul>
            </div>
        </footer>
        </div>
    )
}