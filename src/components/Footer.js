import { FaApple } from "react-icons/fa";

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
                <li><a href='/'>Loja</a></li>
                <li><a href='/'>Mac</a></li>
                <li><a href='/'>iPad</a></li>
                <li><a href='/'>iPhone</a></li>
                <li><a href='/'>Airpods</a></li>
                <li><a href='/'>Acessorios</a></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Sua conta</h1>
                <li><a href='/'>Gerenciar seu ID Apple</a></li>
                <li><a href='/'>Conta da Apple Store</a></li>
                <li><a href='/'>iCloud.com</a></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Apple Store</h1>
                <li><a href='/'>Encontre uma loja</a></li>
                <li><a href='/'>Genius Bar</a></li>
                <li><a href='/'>Today at Apple</a></li>
                <li><a href='/'>Apple Camp</a></li>
                <li><a href='/'>App Apple Store</a></li>
                <li><a href='/'>Financiamento</a></li>
                <li><a href='/'>Status do seu pedido</a></li>
                <li><a href='/'>Ajuda para comprar</a></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Entretenimento</h1>
                <li><a href='/'>Apple One</a></li>
                <li><a href='/'>Apple TV+</a></li>
                <li><a href='/'>App Store</a></li>
                <li><a href='/'>Apple Books</a></li>
                <li><a href='/'>Apple Podcasts</a></li>
                <li><a href='/'>Apple Fitness+</a></li>
                <li><a href='/'>Apple Arcade</a></li>
                <li><a href='/'>Apple Music</a></li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
                <h1 className="text-[#1c1c1e] font-bold">Sobre a Apple</h1>
                <li><a href='/'>Contato</a></li>
                <li><a href='/'>Eventos</a></li>
                <li><a href='/'>Ética e Compliance</a></li>
                <li><a href='/'>Investidores</a></li>
                <li><a href='/'>Oportunidades de Carreira</a></li>
                <li><a href='/'>Liderança da Apple</a></li>
                <li><a href='/'>Newsroom</a></li>
            </ul>
            </div>
        </footer>
        </div>
    )
}